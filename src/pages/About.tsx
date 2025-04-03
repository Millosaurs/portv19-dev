import { ReactNode } from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaFigma, FaHtml5, FaJs, FaReact, FaSlack } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { MdPlace } from "react-icons/md";
import "../index.css";
import { Link } from "react-router-dom";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
}

const SkillCard = ({ icon, title }: SkillCardProps) => (
  <div className="bg-background-card p-6 rounded-2xl flex items-center gap-3">
    <div className="text-2xl text-text-dark">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

// Add this at the top of your About.tsx file where other imports are

export default function About() {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-purple-500 text-xs mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            My Journey
          </div>
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-gray-400">
            Designer, developer, and creative problem solver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="md:col-span-1">
            <div className="bg-background-card rounded-2xl overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/161939687?v=4"
                alt="Sharan Shrivatsav"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Location</h3>
                <div className="text-text-accent-orange/60 flex flex-row items-center">
                  <MdPlace className="text-xl mr-2" />
                  <span>Banglore, India</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Education</h3>
                <p className="text-gray-300">Computer Science Major</p>
                <p className="text-sm text-gray-400">First Year</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <p className="text-gray-300 mb-4">
                I'm a first-year Computer Science student with a passion for creating 
                intuitive and visually appealing digital experiences. My journey in 
                tech began with a curiosity about how websites work, which led me to 
                explore front-end development and design.
              </p>
              <p className="text-gray-300">
                Currently focusing on mastering modern web technologies like React, 
                TypeScript, and Tailwind CSS, while also studying AI, databases, and 
                advanced web design principles. I aim to become a versatile full-stack 
                developer capable of building complete, production-ready applications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Development</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React & TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Design</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>UI/UX Design</li>
                    <li>Figma</li>
                    <li>Design Systems</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Interests</h2>
              <p className="text-gray-300">
                Beyond coding, I enjoy exploring new design trends, participating in 
                hackathons, and contributing to open-source projects. I'm particularly 
                interested in the intersection of design and technology, and how they 
                can be used to create meaningful user experiences.
              </p>
            </div>

            <div className="pt-4">
              <Link to="/projects">
                <Button className="group py-3 text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                  <span className="">View My Projects</span>
                  <ArrowRightIcon
                    className="-me-1 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              </Link>
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
    </div>
  );
}
