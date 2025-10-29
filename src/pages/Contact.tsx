import "../index.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4">
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-teal-500 text-xs mb-3 md:mb-4">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                        Get In Touch
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                        Contact
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400">
                        Let's discuss your project or just say hello
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 my-8 md:my-12">
                    {/* Contact information */}
                    <div
                        className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: "100ms",
                            animationFillMode: "backwards",
                        }}
                    >
                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Let's Work Together
                            </h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm currently available for freelance work and
                                exciting projects. Whether you need a full-stack
                                developer, UI/UX designer, or just want to
                                collaborate on something amazing, I'd love to
                                hear from you!
                            </p>

                            <div className="space-y-4">
                                {/* Email contact */}
                                <a
                                    href="mailto:sharanshrivatsav0@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-background-button/30 rounded-2xl hover:bg-background-button/50 transition-all duration-300 group"
                                >
                                    <div className="bg-teal-500/10 p-3 rounded-full group-hover:bg-teal-500/20 transition-colors">
                                        <Mail className="text-2xl text-teal-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold">
                                            Email
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300 group-hover:text-teal-500 transition-colors">
                                            sharanshrivatsav0@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 p-4 bg-background-button/30 rounded-2xl">
                                    <div className="bg-orange-500/10 p-3 rounded-full">
                                        <MapPin className="text-2xl text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold">
                                            Location
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300">
                                            Bangalore, India (IST)
                                        </p>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="flex items-center gap-4 p-4 bg-background-button/30 rounded-2xl">
                                    <div className="bg-green-500/10 p-3 rounded-full">
                                        <Clock className="text-2xl text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold">
                                            Availability
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-300">
                                            <span className="inline-flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                Available for new projects
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact CTA */}
                        <div className="bg-background-card p-6 md:p-8 rounded-3xl hover:bg-background-button/50 transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-bold mb-3">
                                Quick Response Guaranteed
                            </h3>
                            <p className="text-gray-300 mb-6">
                                I typically respond within 24 hours. Let's start
                                a conversation!
                            </p>
                            <a href="mailto:sharanshrivatsav0@gmail.com">
                                <Button className="w-full py-3 md:py-4 bg-white text-black hover:bg-background-primary hover:text-white rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    <span>Send Email</span>
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Social & Work Platforms */}
                    <div
                        className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            animationDelay: "200ms",
                            animationFillMode: "backwards",
                        }}
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Connect With Me
                            </h2>
                            <p className="text-gray-400 mb-6">
                                Find me on these platforms
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <a
                                    href="https://github.com/Millosaurs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-background-card p-5 md:p-6 rounded-3xl flex items-center gap-4 hover:bg-background-button/50 transition-all duration-300 group hover:scale-105"
                                >
                                    <div className="bg-gray-500/10 p-3 rounded-full group-hover:bg-gray-500/20 transition-colors">
                                        <FaGithub className="text-2xl md:text-3xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-semibold">
                                            GitHub
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            40+ repositories • Open source
                                            contributions
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sharan-shrivatsav"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-background-card p-5 md:p-6 rounded-3xl flex items-center gap-4 hover:bg-background-button/50 transition-all duration-300 group hover:scale-105"
                                >
                                    <div className="bg-blue-500/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                                        <FaLinkedin className="text-2xl md:text-3xl text-blue-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-semibold">
                                            LinkedIn
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Professional network & connections
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://discord.com/users/Millosaurs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-background-card p-5 md:p-6 rounded-3xl flex items-center gap-4 hover:bg-background-button/50 transition-all duration-300 group hover:scale-105"
                                >
                                    <div className="bg-indigo-500/10 p-3 rounded-full group-hover:bg-indigo-500/20 transition-colors">
                                        <FaDiscord className="text-2xl md:text-3xl text-indigo-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-semibold">
                                            Discord
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Direct messaging & community
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://x.com/shrivatsav_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-background-card p-5 md:p-6 rounded-3xl flex items-center gap-4 hover:bg-background-button/50 transition-all duration-300 group hover:scale-105"
                                >
                                    <div className="bg-gray-700/30 p-3 rounded-full group-hover:bg-gray-700/50 transition-colors">
                                        <FaXTwitter className="text-2xl md:text-3xl text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base md:text-lg font-semibold">
                                            X (Twitter)
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            Updates & tech discussions
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-background-card p-6 md:p-8 rounded-3xl">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                                Working Hours
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-background-button/50">
                                    <span className="text-gray-400">
                                        Monday - Friday
                                    </span>
                                    <span className="text-white font-medium">
                                        9:00 AM - 6:00 PM IST
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-background-button/50">
                                    <span className="text-gray-400">
                                        Saturday
                                    </span>
                                    <span className="text-white font-medium">
                                        10:00 AM - 2:00 PM IST
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-400">
                                        Sunday
                                    </span>
                                    <span className="text-gray-500 font-medium">
                                        Closed
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                * Emergency requests are handled on weekends
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
