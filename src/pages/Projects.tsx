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
    <div className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.01] group w-full">
      <div className="h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-background-card rounded-3xl relative w-[100%]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full md:object-left object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg"; // Fallback image
          }}
        />
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
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2 sm:mt-3 md:mt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background-card flex items-center justify-center mr-2 sm:mr-4">
              <span className="text-sm sm:text-base text-white">
                {creator.charAt(0)}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400">{creator}</p>
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
  const projects = [
    {
      title: "Achievement Tracker",
      imageUrl: "/ArcHide/image.png",
      link: "/projects/act",
    },
    {
      title: "NoteBook-App",
      creator: "Sharan Shrivatsav",
      imageUrl: "/Orangy/image.png",
      link: "/projects/notebook-app",
    },
    {
      title: "E-commerce Dashboard",
      imageUrl: "/Dashboard/image.png",
      link: "/projects/dashboard",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 lg:pr-18">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-blue-500 text-xs mb-3 md:mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Featured Work
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400">
            Showcase of innovative design solutions
          </p>
        </div>

        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16">
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
      </div>
      <div className="mt-16 md:mt-24 pt-6 mb-18 md:pt-8 border-t-2 border-background-card ">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm leading-2">
          <div className="mb-4 md:mb-0">Sharan Shrivatsav · ©2024</div>
          <div>Edited Times - 114</div>
        </div>
      </div>
    </div>
  );
}
