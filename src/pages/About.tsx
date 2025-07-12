import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { MdPlace } from "react-icons/md";
import "../index.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-purple-500 text-xs mb-3 md:mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            My Journey
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">About Me</h1>
          <p className="text-gray-400">
            Designer, developer, and creative problem solver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12">
          <div className="md:col-span-1">
            <div className="bg-background-card rounded-2xl overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/161939687?v=4"
                alt="Sharan Shrivatsav"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <div>
                <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                  Location
                </h3>
                <div className="text-text-accent-orange/60 flex flex-row items-center">
                  <MdPlace className="text-lg md:text-xl mr-2" />
                  <span>Banglore, India</span>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                  Education
                </h3>
                <p className="text-gray-300">Computer Science Major</p>
                <p className="text-xs md:text-sm text-gray-400">First Year</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 md:space-y-8 mt-6 md:mt-0">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Background
              </h2>
              <p className="text-gray-300 mb-3 md:mb-4">
                I'm a first-year Computer Science student with a passion for
                creating intuitive and visually appealing digital experiences.
                My journey in tech began with a curiosity about how websites
                work, which led me to explore web development and design.
              </p>
              <p className="text-gray-300">
                I believe in the power of technology to solve problems and
                enhance lives. My goal is to combine technical skills with
                creative thinking to build solutions that are both functional
                and beautiful.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-background-card p-4 md:p-5 rounded-2xl">
                  <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3">
                    Web Development
                  </h3>
                  <ul className="space-y-1 text-sm md:text-base text-gray-300">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="bg-background-card p-4 md:p-5 rounded-2xl">
                  <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3">
                    Design
                  </h3>
                  <ul className="space-y-1 text-sm md:text-base text-gray-300">
                    <li>UI/UX Design</li>
                    <li>Figma, Adobe XD</li>
                    <li>Wireframing & Prototyping</li>
                    <li>Visual Design</li>
                  </ul>
                </div>
                <div className="bg-background-card p-4 md:p-5 rounded-2xl">
                  <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3">
                    Other Skills
                  </h3>
                  <ul className="space-y-1 text-sm md:text-base text-gray-300">
                    <li>Git & Version Control</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
                <div className="bg-background-card p-4 md:p-5 rounded-2xl">
                  <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3">
                    Learning
                  </h3>
                  <ul className="space-y-1 text-sm md:text-base text-gray-300">
                    <li>TypeScript</li>
                    <li>Node.js & Express</li>
                    <li>Database Design</li>
                    <li>AI Integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Interests
              </h2>
              <p className="text-gray-300 mb-4">
                Beyond coding and design, I enjoy exploring new technologies,
                reading about tech trends, and contributing to open-source
                projects. I'm also interested in AI and its applications in
                creating more intuitive user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/projects">
                  <Button className="w-full sm:w-auto group py-2 md:py-3 text-sm md:text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                    <span>View Projects</span>
                    <ArrowRightIcon
                      className="-me-1 transition-transform group-hover:translate-x-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full sm:w-auto group py-2 md:py-3 text-sm md:text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                    <span>Contact Me</span>
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
