import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Github, Mail, Linkedin } from "lucide-react";
import { MdPlace } from "react-icons/md";
import "../index.css";
import { Link } from "react-router-dom";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiJavascript,
    SiGit,
    SiTypescript,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiFramer,
    SiDrizzle,
    SiPrisma,
    SiDocker,
    SiVercel,
    SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
    const [githubStats, setGithubStats] = useState({
        repos: 40,
        projects: 11,
        experience: "2+",
    });

    useEffect(() => {
        // Animate stats on mount
        const animateValue = (
            start: number,
            end: number,
            duration: number,
            callback: (value: number) => void,
        ) => {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min(
                    (timestamp - startTimestamp) / duration,
                    1,
                );
                callback(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        animateValue(0, 40, 1000, (val) =>
            setGithubStats((prev) => ({ ...prev, repos: val })),
        );
    }, []);

    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                            <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-green-500 text-xs mb-3 md:mb-4">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Available for Work
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-3">
                                Hello! I'm Sharan Shrivatsav 👋
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 mb-4">
                                Full-Stack Developer & UI/UX Designer
                            </p>
                            <p className="text-base md:text-lg text-gray-500 max-w-2xl">
                                Crafting beautiful, functional web experiences
                                with modern technologies
                            </p>
                        </div>

                        {/* Profile Image */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background-card hover:border-white/20 transition-all duration-300">
                            <img
                                src="https://avatars.githubusercontent.com/u/161939687?v=4"
                                alt="Sharan Shrivatsav"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div
                    className="grid grid-cols-3 gap-4 mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "100ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                            {githubStats.experience}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Years Experience
                        </div>
                    </div>
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                            {githubStats.projects}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Projects
                        </div>
                    </div>
                    <div className="bg-background-card p-4 md:p-6 rounded-2xl text-center hover:bg-background-button/50 transition-all duration-300">
                        <div className="text-2xl md:text-4xl font-bold text-white mb-1">
                            {githubStats.repos}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                            Repositories
                        </div>
                    </div>
                </div>
                {/* About Section */}
                <div
                    className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "200ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                        <div className="text-text-accent-orange/60 flex flex-row items-center mb-4">
                            <MdPlace className="text-xl md:text-2xl mr-2" />
                            <span>Bangalore, India</span>
                        </div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                            First-year Computer Science student passionate about
                            creating intuitive and visually appealing digital
                            experiences. Specializing in full-stack development
                            with a focus on modern web technologies and
                            user-centered design.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://github.com/Millosaurs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-background-button rounded-full text-sm text-gray-300 hover:text-white hover:bg-background-button/70 transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href="mailto:shrivatsav.dev@gmail.com"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-background-button rounded-full text-sm text-gray-300 hover:text-white hover:bg-background-button/70 transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                            <a
                                href="https://linkedin.com/in/sharan-shrivatsav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-background-button rounded-full text-sm text-gray-300 hover:text-white hover:bg-background-button/70 transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "300ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <Link to="/about" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white transition-all duration-300 hover:scale-105">
                            <span>About Me</span>
                            <ArrowRightIcon
                                className="-me-1 transition-transform group-hover:translate-x-0.5"
                                size={18}
                                aria-hidden="true"
                            />
                        </Button>
                    </Link>
                    <Link to="/projects" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-background-card text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                            <span>View Projects</span>
                            <ArrowRightIcon
                                className="-me-1 transition-transform group-hover:translate-x-0.5"
                                size={18}
                                aria-hidden="true"
                            />
                        </Button>
                    </Link>
                </div>
                {/* Tech Stack Section */}
                <div
                    className="mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "400ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Tech Stack
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Technologies I work with
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiTypescript className="text-3xl md:text-4xl text-blue-500 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    TypeScript
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiJavascript className="text-3xl md:text-4xl text-yellow-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    JavaScript
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiReact className="text-3xl md:text-4xl text-blue-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    React
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiNextdotjs className="text-3xl md:text-4xl text-white mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Next.js
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiNodedotjs className="text-3xl md:text-4xl text-green-500 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Node.js
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiTailwindcss className="text-3xl md:text-4xl text-cyan-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Tailwind CSS
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiPostgresql className="text-3xl md:text-4xl text-blue-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    PostgreSQL
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiMongodb className="text-3xl md:text-4xl text-green-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    MongoDB
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiFigma className="text-3xl md:text-4xl text-purple-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Figma
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiFramer className="text-3xl md:text-4xl text-pink-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Framer
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiGit className="text-3xl md:text-4xl text-orange-500 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Git
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiExpress className="text-3xl md:text-4xl text-gray-300 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Express
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiDrizzle className="text-3xl md:text-4xl text-green-300 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Drizzle ORM
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiPrisma className="text-3xl md:text-4xl text-teal-400 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Prisma
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <FaJava className="text-3xl md:text-4xl text-red-500 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Java
                                </span>
                                <span className="text-xs text-gray-400">
                                    Intermediate
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiDocker className="text-3xl md:text-4xl text-blue-500 mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Docker
                                </span>
                                <span className="text-xs text-gray-400">
                                    Beginner
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiVercel className="text-3xl md:text-4xl text-white mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    Vercel
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-3 md:p-4 bg-background-card rounded-2xl hover:bg-background-button/50 transition-all duration-300 hover:scale-105">
                            <SiGithub className="text-3xl md:text-4xl text-white mr-3 flex-shrink-0" />
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-base font-medium truncate">
                                    GitHub
                                </span>
                                <span className="text-xs text-gray-400">
                                    Advanced
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div
                    className="mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4"
                    style={{
                        animationDelay: "500ms",
                        animationFillMode: "backwards",
                    }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Experience
                    </h2>
                    <p className="text-gray-400 mb-6">
                        My professional journey
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="bg-background-card p-5 md:p-6 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold">
                                        Freelance Full-Stack Developer &
                                        Designer
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Self-Employed
                                    </p>
                                </div>
                                <span className="text-sm text-gray-400 bg-background-button/50 px-3 py-1 rounded-full w-fit">
                                    2023 - Present
                                </span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Over 2 years of freelancing experience
                                specializing in full-stack development and UI/UX
                                design. Delivered 10+ projects ranging from SaaS
                                applications to e-commerce platforms, focusing
                                on modern web technologies, clean code
                                practices, and user-centered design principles.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="text-xs px-3 py-1 bg-background-button/50 text-gray-400 rounded-full">
                                    React & Next.js
                                </span>
                                <span className="text-xs px-3 py-1 bg-background-button/50 text-gray-400 rounded-full">
                                    TypeScript
                                </span>
                                <span className="text-xs px-3 py-1 bg-background-button/50 text-gray-400 rounded-full">
                                    UI/UX Design
                                </span>
                                <span className="text-xs px-3 py-1 bg-background-button/50 text-gray-400 rounded-full">
                                    Database Design
                                </span>
                            </div>
                        </div>

                        <div className="w-full sm:w-auto">
                            <a
                                href="/resume.pdf"
                                download
                                className="w-full block sm:inline-block"
                            >
                                <Button className="w-full sm:w-auto group py-3 md:py-4 px-6 md:px-8 text-sm md:text-base bg-background-card text-white rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                                    <span>Download Resume</span>
                                    <ArrowRightIcon
                                        className="-me-1 transition-transform group-hover:translate-x-0.5"
                                        size={18}
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
                    <div className="mb-4 md:mb-0">
                        Sharan Shrivatsav · ©2024
                    </div>
                    <div>Edited Times - 114</div>
                </div>
            </div>
        </div>
    );
}
