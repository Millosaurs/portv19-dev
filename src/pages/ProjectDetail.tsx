import { Button } from "@/components/ui/button";
import {
    ArrowLeftIcon,
    ExternalLinkIcon,
    GithubIcon,
    Calendar,
    Code,
    Star,
    CheckCircle,
} from "lucide-react";
import "../index.css";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "@/assets/projects";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projectId ? projectsData[projectId] : null;

    if (!project) {
        return (
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-20 h-20 mx-auto mb-6 bg-background-card rounded-full flex items-center justify-center">
                        <Code className="w-10 h-10 text-gray-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-gray-400 mb-8 text-lg">
                        The project you're looking for doesn't exist or has been
                        removed.
                    </p>
                    <Link to="/projects">
                        <Button className="group py-3 px-6 text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white transition-all duration-300 hover:scale-105">
                            <ArrowLeftIcon className="mr-2" size={16} />
                            <span>Back to Projects</span>
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8 animate-in fade-in slide-in-from-bottom-4">
                    <Link to="/projects">
                        <Button
                            variant="ghost"
                            className="group py-2 px-4 text-sm hover:bg-background-card rounded-2xl transition-all duration-300"
                        >
                            <ArrowLeftIcon
                                className="mr-2 group-hover:-translate-x-1 transition-transform"
                                size={16}
                            />
                            <span>Back to Projects</span>
                        </Button>
                    </Link>
                </div>

                {/* Header Section */}
                <div
                    className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "100ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold mb-3">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400">
                                {project.description}
                            </p>
                        </div>
                        {project.featured && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
                                <Star className="w-5 h-5 text-blue-500 fill-blue-500" />
                                <span className="text-sm font-medium text-blue-500">
                                    Featured
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Quick Stats */}
                    <div className="flex flex-wrap gap-4 mt-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-background-card rounded-full">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">
                                {project.date}
                            </span>
                        </div>
                        {project.liveUrl && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-500">
                                    Live
                                </span>
                            </div>
                        )}
                        <div className="flex items-center gap-2 px-4 py-2 bg-background-card rounded-full">
                            <Code className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-300">
                                {project.technologies.length} Technologies
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className="mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "200ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-background-card to-background-primary/30 border border-white/5 hover:border-white/10 transition-all duration-300 group">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/placeholder.svg";
                            }}
                        />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview Section */}
                        <div
                            className="bg-background-card p-6 md:p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-4"
                            style={{
                                animationDelay: "300ms",
                                animationFillMode: "backwards",
                            }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                                    <Code className="w-4 h-4 text-blue-500" />
                                </div>
                                Overview
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                {project.longDescription}
                            </p>
                        </div>

                        {/* Key Features Section */}
                        {project.features && (
                            <div
                                className="bg-background-card p-6 md:p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-4"
                                style={{
                                    animationDelay: "400ms",
                                    animationFillMode: "backwards",
                                }}
                            >
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/20 transition-colors">
                                                <CheckCircle
                                                    size={14}
                                                    className="text-green-500"
                                                />
                                            </div>
                                            <span className="text-gray-300 leading-relaxed">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Project Details Card */}
                        <div
                            className="bg-background-card p-6 md:p-8 rounded-3xl sticky top-8 animate-in fade-in slide-in-from-bottom-4"
                            style={{
                                animationDelay: "500ms",
                                animationFillMode: "backwards",
                            }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-6">
                                Project Info
                            </h3>

                            <div className="space-y-6">
                                {/* Date */}
                                <div>
                                    <h4 className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        Date
                                    </h4>
                                    <p className="font-medium">
                                        {project.date}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                                        <Code className="w-4 h-4" />
                                        Technologies Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 bg-background-button/50 hover:bg-background-button/70 text-gray-300 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3 pt-4 border-t border-background-button/50">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <Button className="w-full group py-3 text-sm bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white transition-all duration-300 hover:scale-105">
                                                <ExternalLinkIcon
                                                    className="mr-2 group-hover:translate-x-0.5 transition-transform"
                                                    size={16}
                                                />
                                                <span>View Live Project</span>
                                            </Button>
                                        </a>
                                    )}

                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full group py-3 text-sm rounded-2xl border-gray-600 hover:bg-background-card transition-all duration-300 hover:scale-105"
                                            >
                                                <GithubIcon
                                                    className="mr-2 group-hover:rotate-12 transition-transform"
                                                    size={16}
                                                />
                                                <span>View Source Code</span>
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
