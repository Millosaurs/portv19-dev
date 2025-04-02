import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  creator?: string;
  imageUrl: string;
  link?: string;
}

const ProjectCard = ({
  title,
  creator = "Sharan Shrivatsav",
  imageUrl,
  link,
}: ProjectCardProps) => {
  const content = (
    <div className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="h-64 overflow-hidden bg-background-card rounded-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg"; // Fallback image
          }}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-gray-400">Creator</p>
        <p className="text-sm text-gray-400">{creator}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="w-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default function Projects() {
  const projects = [
    {
      title: "NoteBook-App",
      creator: "Sharan Shrivatsav",
      imageUrl: "/Orangy/image.png",
      link: "/projects/notebook-app",
    },
    {
      title: "Achievement Tracker",
      imageUrl: "/ArcHide/image.png",
      link: "/projects/act",
    },
    {
      title: "E-commerce Dashboard",
      imageUrl: "/Dashboard/image.png",
      link: "/projects/dashboard",
    },
    {
      title: "Mobile App UI",
      imageUrl: "/MobileUI/image.png",
      link: "/projects/mobile-ui",
    },
    {
      title: "Mobile App UI (2)",
      imageUrl: "/MobileUI/image.png",
      link: "/projects/mobile-ui",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400">
            Showcase of innovative design solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-22 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              creator={project.creator}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>

        {/* Footer section */}
        <div className="mt-24 pt-8 border-t-2 border-background-card">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">Sharan Shrivatsav · ©2024</div>
            <div>Edited Times - 114</div>
          </div>
        </div>
      </div>
    </div>
  );
}
