import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import "../index.css";
import { Link, useParams } from "react-router-dom";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  date: string;
}

const projectsData: Record<string, ProjectData> = {
  "notebook-app": {
    id: "notebook-app",
    title: "NoteBook-App",
    description: "A clean, minimal note-taking application",
    longDescription:
      "Orangy is a modern note-taking application designed to help users organize their thoughts, tasks, and ideas in a clean, intuitive interface. The application features real-time synchronization, markdown support, and customizable organization systems.",
    imageUrl: "/Orangy/image.png",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://note-book-gamma.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/NoteBook",
    features: [
      "Real-time synchronization across devices",
      "Markdown support for rich text formatting",
      "Customizable organization with tags and folders",
      "Dark and light theme options",
      "Offline capability with local storage",
    ],
    date: "June 2023",
  },
  act: {
    id: "act",
    title: "Achievement Tracker",
    description:
      "Track and showcase your personal and professional achievements",
    longDescription:
      "Achievement Tracker is a comprehensive platform that helps users document, organize, and showcase their personal and professional accomplishments. The application provides customizable templates, data visualization, and sharing capabilities.",
    imageUrl: "/ArcHide/image.png",
    technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
    liveUrl: "https://arc-hide.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/ArcHide",
    features: [
      "Customizable achievement templates",
      "Data visualization of progress over time",
      "Public profile sharing options",
      "Integration with LinkedIn and other platforms",
      "Resume generation based on achievements",
    ],
    date: "September 2023",
  },
  heroic: {
    id: "heroic-showcase",
    title: "ShowCase for Heroic Studios",
    description: "Crafting Immersive Minecraft Experiences for Players",
    longDescription:
      "A comprehensive showcase platform for Heroic Studios' Minecraft server configurations and setups. Features custom plugin configurations, server optimization techniques, and unique gameplay mechanics designed to enhance player experience. Includes detailed documentation of server architecture, performance tuning, and custom-built features.",
    imageUrl: "/heroic/image.png",
    technologies: ["React", "Vite", "Node.js", "Bun", "Tailwind"],
    liveUrl: "https://heroic-studio.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/heroic-studio-showcase",
    features: [
      "Custom plugin configuration showcase",
      "Server optimization demonstrations",
      "Interactive gameplay mechanics preview",
      "Performance metrics visualization",
      "Documentation and setup guides",
    ],
    date: "May 2025",
  },
  "koala-hosting": {
    id: "Koala-Hosting",
    title: "Koala Hosting Landing Page",
    description: "A modern and responsive landing page for Koala Hosting",
    longDescription:
      "A modern and responsive landing page for Koala Hosting, a reliable and secure hosting provider. The page features a clean and intuitive design, showcasing the hosting services and benefits. It also includes a contact form and social media links for easy communication with potential customers.",
    imageUrl: "/koala-hosting/image.png",
    technologies: [
      "React",
      "NextJs",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
    ],
    liveUrl: "https://koala-dev.shrivatsav.dev/",
    githubUrl: "",
    features: [
      "Clean and modern design",
      "Responsive layout for various devices",
      "Contact form for easy communication",
      "Social media links for easy access",
      "SEO optimized for better visibility",
      "Customizable and easy to maintain",
    ],
    date: "May 2025",
  },
};

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="w-full text-center py-16 lg:px-96">
        <h1 className="text-3xl font-bold mb-4 items-center">
          Project Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/projects">
          <Button className="group py-3 text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
            <ArrowLeftIcon className="mr-2" size={16} />
            <span>Back to Projects</span>
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <Link to="/projects">
          <Button
            variant="ghost"
            className="group py-2 text-sm hover:bg-background-card rounded-2xl"
          >
            <ArrowLeftIcon className="mr-2" size={16} />
            <span>Back to Projects</span>
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-400">{project.description}</p>
      </div>

      <div className="mb-10 overflow-hidden rounded-2xl bg-background-card">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg"; // Fallback image
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300 mb-6">{project.longDescription}</p>

          {project.features && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-background-card p-6 rounded-2xl h-fit">
          <h3 className="text-xl font-bold mb-4">Project Details</h3>

          <div className="mb-4">
            <h4 className="text-sm text-gray-400 mb-1">Date</h4>
            <p>{project.date}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm text-gray-400 mb-1">Technologies</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-background-button/70 text-gray-300 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full group py-3 text-sm bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                  <ExternalLinkIcon className="mr-2" size={16} />
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
                  className="w-full group py-3 text-sm rounded-2xl border-gray-600 hover:bg-background-card"
                >
                  <GithubIcon className="mr-2" size={16} />
                  <span>View Source Code</span>
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-24 pt-8 border-t-2 border-background-card">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">Sharan Shrivatsav · ©2024</div>
          <div>Edited Times - 114</div>
        </div>
      </div>
    </div>
  );
}
