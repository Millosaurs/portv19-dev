import { Link } from "react-router-dom";
import { projects, projectsData } from "@/assets/projects";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

interface ProjectCardProps {
    title: string;
    creator?: string;
    imageUrl: string;
    link?: string;
    date?: string;
    projectId?: string;
}

const ProjectCard = ({
    title,
    creator = "Sharan Shrivatsav",
    imageUrl,
    link,
    date,
    projectId,
}: ProjectCardProps) => {
    const projectData = projectId ? projectsData[projectId] : null;

    const content = (
        <div className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.01] group w-full">
            <div className="aspect-[16/9] overflow-hidden bg-background-card rounded-3xl relative w-full">
                <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                    }}
                />
                {/* Featured Badge */}
                {projectData?.featured && (
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-500/90 text-white text-xs font-medium rounded-full">
                            Featured
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6 md:p-8">
                    <span className="text-sm md:text-base text-black font-medium px-4 sm:px-6 py-2 sm:py-3 bg-white/90 rounded-full">
                        View Project
                    </span>
                </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 px-2 sm:px-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium group-hover:text-white transition-colors">
                        {title}
                    </h3>
                    <span className="text-xs sm:text-sm md:text-base text-gray-400">
                        {date}
                    </span>
                </div>

                {/* Technology Tags */}
                {projectData && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {projectData.technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-background-button/50 text-gray-400 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                        {projectData.technologies.length > 3 && (
                            <span className="text-xs px-2 py-1 text-gray-500">
                                +{projectData.technologies.length - 3} more
                            </span>
                        )}
                    </div>
                )}
                <div className="flex items-center justify-between mt-2 sm:mt-3 md:mt-4">
                    <div className="flex items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/161939687?v=4"
                            alt={creator}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-4 object-cover"
                        />
                        <p className="text-sm sm:text-base text-gray-400">
                            {creator}
                        </p>
                    </div>
                    <span className="text-sm sm:text-base text-gray-400">
                        {/* You could add additional info here */}
                    </span>
                </div>
            </div>
        </div>
    );

    if (link) {
        return <Link to={link}>{content}</Link>;
    }

    return content;
};

export default function Projects() {
    const [selectedTech, setSelectedTech] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("newest");
    const searchInputRef = useRef<HTMLInputElement>(null);

    const hasActiveFilters =
        selectedTech !== "All" || searchQuery !== "" || sortBy !== "newest";

    const clearAllFilters = () => {
        setSelectedTech("All");
        setSearchQuery("");
        setSortBy("newest");
    };

    // Keyboard shortcut: Press "/" to focus search
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (
                e.key === "/" &&
                !["INPUT", "TEXTAREA"].includes(
                    (e.target as HTMLElement).tagName,
                )
            ) {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    // Get unique technologies from all projects
    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        Object.values(projectsData).forEach((project) => {
            project.technologies.forEach((tech) => techSet.add(tech));
        });
        return ["All", ...Array.from(techSet).sort()];
    }, []);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = projects.filter((project) => {
            // Filter by technology
            if (selectedTech !== "All") {
                const projectId = project.link?.split("/").pop() || "";
                const projectData = projectsData[projectId];
                if (!projectData?.technologies.includes(selectedTech))
                    return false;
            }

            // Filter by search query
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                const projectId = project.link?.split("/").pop() || "";
                const projectData = projectsData[projectId];
                return (
                    project.title.toLowerCase().includes(query) ||
                    projectData?.description.toLowerCase().includes(query) ||
                    projectData?.technologies.some((tech) =>
                        tech.toLowerCase().includes(query),
                    )
                );
            }

            return true;
        });

        // Sort projects - Featured first, then by selected sort
        filtered = [...filtered].sort((a, b) => {
            const projectIdA = a.link?.split("/").pop() || "";
            const projectIdB = b.link?.split("/").pop() || "";
            const projectDataA = projectsData[projectIdA];
            const projectDataB = projectsData[projectIdB];

            // Featured projects come first
            if (projectDataA?.featured && !projectDataB?.featured) return -1;
            if (!projectDataA?.featured && projectDataB?.featured) return 1;

            // Then apply selected sort
            if (sortBy === "oldest") {
                return projects.indexOf(b) - projects.indexOf(a);
            } else if (sortBy === "name") {
                return a.title.localeCompare(b.title);
            }
            return 0; // Keep original order for "newest"
        });

        return filtered;
    }, [selectedTech, searchQuery, sortBy]);

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6 md:mb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-blue-500 text-xs mb-3 md:mb-4">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Featured Work
                            </div>
                            <h1 className="text-2xl md:text-4xl font-bold mb-2">
                                Projects
                            </h1>
                            <p className="text-gray-400">
                                Showcase of innovative design solutions
                            </p>
                        </div>
                        <div className="text-sm text-gray-400 mt-8">
                            {filteredProjects.length}{" "}
                            {filteredProjects.length === 1
                                ? "project"
                                : "projects"}
                        </div>

                        {/* Clear Filters Button */}
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="px-4 py-2.5 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                aria-label="Clear all filters"
                            >
                                <X className="w-4 h-4" />
                                Clear filters
                            </button>
                        )}
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search projects... (Press / to focus)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Escape") setSearchQuery("");
                                }}
                                aria-label="Search projects. Press forward slash to focus"
                                className="w-full pl-12 pr-10 py-2.5 rounded-full bg-background-card text-white placeholder:text-gray-400 border border-transparent focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                                    aria-label="Clear search"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Technology Filter Dropdown */}
                        <div className="relative">
                            <select
                                value={selectedTech}
                                onChange={(e) =>
                                    setSelectedTech(e.target.value)
                                }
                                aria-label="Filter by technology"
                                className="appearance-none px-4 py-2.5 pr-10 rounded-full bg-background-card text-white border border-transparent focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 cursor-pointer min-w-[150px]"
                            >
                                {allTechnologies.map((tech) => (
                                    <option key={tech} value={tech}>
                                        {tech === "All"
                                            ? "All Technologies"
                                            : tech}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                aria-label="Sort projects"
                                className="appearance-none px-4 py-2.5 pr-10 rounded-full bg-background-card text-white border border-transparent focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 cursor-pointer min-w-[150px]"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="name">Name (A-Z)</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 ? (
                    <div className="text-center py-16 md:py-24 animate-in fade-in slide-in-from-bottom-4">
                        <div className="mb-4">
                            <svg
                                className="w-16 h-16 mx-auto text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-medium text-gray-400 mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-500 mb-6">
                            Try adjusting your filters or search query
                        </p>
                        {hasActiveFilters && (
                            <button
                                onClick={clearAllFilters}
                                className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16">
                        {filteredProjects.map((project, index) => {
                            const projectId =
                                project.link?.split("/").pop() || "";
                            return (
                                <div
                                    key={index}
                                    className="animate-in fade-in slide-in-from-bottom-4"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animationFillMode: "backwards",
                                    }}
                                >
                                    <ProjectCard
                                        title={project.title}
                                        creator={project.creator}
                                        imageUrl={project.imageUrl}
                                        link={project.link}
                                        date={project.date}
                                        projectId={projectId}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div className="mt-16 md:mt-24 pt-6 mb-18 md:pt-8 border-t-2 border-background-card ">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm leading-2">
                    <div className="mb-4 md:mb-0">
                        Sharan Shrivatsav · ©2024
                    </div>
                    <div>Edited Times - 114</div>
                </div>
            </div>
        </div>
    );
}
