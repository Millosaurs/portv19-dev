import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Code, Palette, Database, Rocket } from "lucide-react";
import { MdPlace } from "react-icons/md";
import "../index.css";
import { Link } from "react-router-dom";
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
    SiPostgresql,
    SiMongodb,
    SiFigma,
    SiFramer,
    SiGit,
    SiExpress,
    SiDrizzle,
    SiPrisma,
    SiDocker,
    SiVercel,
    SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
export default function About() {
    return (
        <div className="w-full">
            {" "}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {" "}
                <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4">
                    {" "}
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-purple-500 text-xs mb-3 md:mb-4">
                        {" "}
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>{" "}
                        My Journey{" "}
                    </div>{" "}
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                        {" "}
                        About Me{" "}
                    </h1>{" "}
                    <p className="text-lg md:text-xl text-gray-400">
                        {" "}
                        Designer, developer, and creative problem solver{" "}
                    </p>{" "}
                </div>{" "}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "100ms",
                        animationFillMode: "backwards",
                    }}
                >
                    {" "}
                    <div className="md:col-span-1">
                        {" "}
                        <div className="bg-background-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
                            {" "}
                            <img
                                src="https://avatars.githubusercontent.com/u/161939687?v=4"
                                alt="Sharan Shrivatsav"
                                className="w-full aspect-square object-cover"
                            />{" "}
                        </div>{" "}
                        <div className="mt-4 md:mt-6 space-y-4 md:space-y-5">
                            {" "}
                            <div className="bg-background-card p-4 rounded-2xl">
                                {" "}
                                <h3 className="text-base md:text-lg font-semibold mb-2">
                                    {" "}
                                    Location{" "}
                                </h3>{" "}
                                <div className="text-text-accent-orange/60 flex flex-row items-center">
                                    {" "}
                                    <MdPlace className="text-lg md:text-xl mr-2" />{" "}
                                    <span>Bangalore, India</span>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="bg-background-card p-4 rounded-2xl">
                                {" "}
                                <h3 className="text-base md:text-lg font-semibold mb-2">
                                    {" "}
                                    Education{" "}
                                </h3>{" "}
                                <p className="text-gray-300 font-medium">
                                    {" "}
                                    Computer Science Major{" "}
                                </p>{" "}
                                <p className="text-xs md:text-sm text-gray-400">
                                    {" "}
                                    First Year Student{" "}
                                </p>{" "}
                            </div>{" "}
                            <div className="bg-background-card p-4 rounded-2xl">
                                {" "}
                                <h3 className="text-base md:text-lg font-semibold mb-2">
                                    {" "}
                                    Availability{" "}
                                </h3>{" "}
                                <div className="inline-flex items-center gap-2">
                                    {" "}
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <p className="text-gray-300">
                                        Available for Work
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-6 md:space-y-8 mt-6 md:mt-0">
                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Background
                            </h2>
                            <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
                                I'm a first-year Computer Science student with a
                                passion for creating intuitive and visually
                                appealing digital experiences. My journey in
                                tech began with curiosity about how websites
                                work, which led me to explore full-stack
                                development and UI/UX design.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                I believe in the power of technology to solve
                                real-world problems and enhance lives. My goal
                                is to combine technical expertise with creative
                                thinking to build solutions that are both
                                functional and beautiful, always keeping the
                                user experience at the forefront.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Skills & Expertise
                            </h2>
                            <p className="text-gray-400 mb-6">
                                My technical capabilities
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                                <div className="bg-background-card p-5 md:p-6 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Code className="w-6 h-6 text-blue-400" />
                                        <h3 className="text-lg md:text-xl font-semibold">
                                            Frontend Development
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="flex flex-col items-center p-2">
                                            <SiTypescript className="text-3xl text-blue-500 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                TypeScript
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiReact className="text-3xl text-blue-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                React
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiNextdotjs className="text-3xl text-white mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Next.js
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiJavascript className="text-3xl text-yellow-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                JavaScript
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiTailwindcss className="text-3xl text-cyan-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Tailwind
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-background-card p-5 md:p-6 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Database className="w-6 h-6 text-green-400" />
                                        <h3 className="text-lg md:text-xl font-semibold">
                                            Backend & Database
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="flex flex-col items-center p-2">
                                            <SiNodedotjs className="text-3xl text-green-500 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Node.js
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiExpress className="text-3xl text-gray-300 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Express
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiPostgresql className="text-3xl text-blue-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                PostgreSQL
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiMongodb className="text-3xl text-green-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                MongoDB
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiDrizzle className="text-3xl text-green-300 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Drizzle
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiPrisma className="text-3xl text-teal-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Prisma
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <FaJava className="text-3xl text-red-500 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Java
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-background-card p-5 md:p-6 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Palette className="w-6 h-6 text-purple-400" />
                                        <h3 className="text-lg md:text-xl font-semibold">
                                            UI/UX Design
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex flex-col items-center p-2">
                                            <SiFigma className="text-3xl text-purple-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Figma
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiFramer className="text-3xl text-pink-400 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Framer
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-background-button/50 pt-4">
                                        <p className="text-xs text-gray-500 mb-2">
                                            Additional Skills:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>• Wireframing & Prototyping</li>
                                            <li>• User Research</li>
                                            <li>• Design Systems</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-background-card p-5 md:p-6 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Rocket className="w-6 h-6 text-orange-400" />
                                        <h3 className="text-lg md:text-xl font-semibold">
                                            Tools & Workflow
                                        </h3>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="flex flex-col items-center p-2">
                                            <SiGit className="text-3xl text-orange-500 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Git
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiGithub className="text-3xl text-white mb-2" />
                                            <span className="text-xs text-gray-400">
                                                GitHub
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiVercel className="text-3xl text-white mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Vercel
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center p-2">
                                            <SiDocker className="text-3xl text-blue-500 mb-2" />
                                            <span className="text-xs text-gray-400">
                                                Docker
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-background-button/50 pt-4 mt-4">
                                        <p className="text-xs text-gray-500 mb-2">
                                            Additional Skills:
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>• Version Control</li>
                                            <li>• CI/CD Deployment</li>
                                            <li>• Agile Methodology</li>
                                            <li>• Team Collaboration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Interests & Passion
                            </h2>
                            <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg">
                                Beyond coding and design, I'm passionate about
                                exploring emerging technologies, contributing to
                                open-source projects, and staying updated with
                                the latest tech trends. I'm particularly
                                interested in AI integration, web performance
                                optimization, and creating accessible,
                                user-friendly interfaces.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                I believe in continuous learning and regularly
                                challenge myself with new projects and
                                technologies to expand my skill set.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Link to="/projects" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white transition-all duration-300 hover:scale-105">
                                    <span>View Projects</span>
                                    <ArrowRightIcon
                                        className="-me-1 transition-transform group-hover:translate-x-0.5"
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-background-card text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                                    <span>Contact Me</span>
                                    <ArrowRightIcon
                                        className="-me-1 transition-transform group-hover:translate-x-0.5"
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
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
