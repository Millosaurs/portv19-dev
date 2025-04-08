import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { MdPlace } from "react-icons/md";
import "../index.css";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiSupabase,
  SiJavascript,
  SiGit,
  SiPython,
} from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-green-500 text-xs mb-3 md:mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Accepting Work
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Hello! I'm Sharan Shrivatsav 👋
          </h1>
          <h1 className="text-xl md:text-3xl text-gray-400">
            Intermediate. Designer & Front-end Developer.
          </h1>
        </div>
        <div className="text-text-accent-orange/60 flex flex-row items-center p-2 pb-4 md:pb-8">
          <MdPlace className="text-xl md:text-2xl mr-2" />
          <span>Banglore, India</span>
        </div>
        <div className="mb-6 md:mb-8 mr-0 md:mr-32">
          <p className="text-gray-300">
            First-year Computer Science major, studying AI, databases, and web
            design. Hoping to master full-stack development and create
            praiseworthy projects.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <div className="w-full sm:w-auto">
            <Link to="/about" className="w-full block sm:inline-block">
              <Button className="w-full sm:w-auto group py-2 md:py-3 text-sm md:text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                <span className="">About</span>
                <ArrowRightIcon
                  className="-me-1 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
          <div className="w-full sm:w-auto">
            <Link to="/projects" className="w-full block sm:inline-block">
              <Button className="w-full sm:w-auto group py-2 md:py-3 text-sm md:text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                <span className="">Projects</span>
                <ArrowRightIcon
                  className="-me-1 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/* Tech Stack Section */}
        <div className="mb-8 md:mb-10 mt-16">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiJavascript className="text-3xl md:text-4xl text-yellow-400 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">JavaScript</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiPython className="text-3xl md:text-4xl text-blue-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Python</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiReact className="text-3xl md:text-4xl text-blue-400 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">React</span>
                <span className="text-xs text-gray-400">Beginner</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiNextdotjs className="text-3xl md:text-4xl text-white mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Next.js</span>
                <span className="text-xs text-gray-400">Beginner</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiTailwindcss className="text-3xl md:text-4xl text-cyan-400 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Tailwind</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiFigma className="text-3xl md:text-4xl text-purple-400 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Figma</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiVite className="text-3xl md:text-4xl text-purple-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Vite</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiSupabase className="text-3xl md:text-4xl text-green-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Supabase</span>
                <span className="text-xs text-gray-400">Beginner</span>
              </div>
            </div>
            <div className="flex items-center p-3 bg-background-card rounded-2xl">
              <SiGit className="text-3xl md:text-4xl text-orange-500 mr-3" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Git</span>
                <span className="text-xs text-gray-400">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Experience</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-background-card p-4 rounded-2xl">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">Freelance Designer & Developer</h3>
                <span className="text-sm text-gray-400">2023 - Present</span>
              </div>
              <p className="text-gray-300">
                Over 2 years of freelancing experience specializing in UX/UI design and front-end development. 
                Created minimalist and user-friendly interfaces for various clients, focusing on intuitive 
                navigation and clean aesthetics.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download
                className="w-full block sm:inline-block"
              >
                <Button className="w-full sm:w-auto group py-2 md:py-3 text-sm md:text-md bg-background-primary text-white rounded-2xl hover:bg-white hover:text-black">
                  <span className="">Download CV</span>
                  <ArrowRightIcon
                    className="-me-1 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <div className="mt-16 md:mt-24 pt-6 mb-18 md:pt-8 border-t-2 border-background-card ">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm leading-2">
          <div className="mb-4 md:mb-0">Sharan Shrivatsav · ©2024</div>
          <div>Edited Times - 114</div>
        </div>
      </div>
    </div>
  );
}
