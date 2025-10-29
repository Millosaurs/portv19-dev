import {
    Github,
    Instagram,
    Linkedin,
    Menu,
    X,
    Home,
    User,
    Briefcase,
    Mail,
    ChevronRight,
} from "lucide-react";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Mobile header
    const MobileHeader = () => (
        <header className="fixed top-0 left-0 right-0 h-16 bg-background-main/95 backdrop-blur-sm border-b border-background-card flex items-center justify-between px-4 gap-y-4 z-50">
            <div className="flex items-center">
                <Link
                    to="/"
                    className="text-lg font-bold hover:text-white transition-colors"
                >
                    Sharan Shrivatsav
                </Link>
            </div>
            <button
                onClick={toggleSidebar}
                className="text-white p-2 hover:bg-background-card rounded-xl transition-all duration-300"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>
    );

    // Desktop sidebar
    const DesktopSidebar = () => (
        <aside className="h-screen w-[280px] min-w-[280px] flex-shrink-0 hidden md:block border-r border-background-card">
            <nav className="h-full flex flex-col items-center py-8 px-4">
                <div className="w-full mb-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative group">
                            <img
                                alt="Profile"
                                src="https://avatars.githubusercontent.com/u/161939687?v=4"
                                className="w-24 h-24 rounded-full border-4 border-background-card group-hover:border-white/20 transition-all duration-300"
                            />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background-main"></div>
                        </div>
                        <h2 className="mt-6 text-xl font-bold text-center hover:text-white transition-colors cursor-default">
                            Sharan Shrivatsav
                        </h2>
                        <p className="mt-2 text-sm text-center text-gray-400">
                            Full-Stack Developer & Designer
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-3 mt-6">
                        <a
                            href="https://github.com/millosaurs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background-card rounded-xl hover:bg-background-button/50 transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github
                                size={20}
                                className="text-gray-400 hover:text-white transition-colors"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sharan-shrivatsav-b24a58358/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background-card rounded-xl hover:bg-background-button/50 transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <Linkedin
                                size={20}
                                className="text-gray-400 hover:text-white transition-colors"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/sharanshrivatsav/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background-card rounded-xl hover:bg-background-button/50 transition-all duration-300 hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram
                                size={20}
                                className="text-gray-400 hover:text-white transition-colors"
                            />
                        </a>
                    </div>
                </div>
                <NavLinks />
            </nav>
        </aside>
    );

    // Mobile sidebar with motion animations
    const MobileSidebar = () => (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 z-40 bg-background-main "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleSidebar}
                    />
                    <motion.nav
                        className="fixed top-0 left-0 z-40 h-full w-full flex flex-col pt-20 px-4"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            when: "beforeChildren",
                        }}
                    >
                        <motion.div className="w-full">
                            <NavLinks
                                onClick={toggleSidebar}
                                isMobileSidebar={true}
                            />
                        </motion.div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );

    // Navigation links component
    const NavLinks = ({ onClick = () => {}, isMobileSidebar = false }) => {
        const isActive = (path: string) => location.pathname === path;

        const navItems = [
            { path: "/", label: "Home", icon: Home },
            { path: "/about", label: "About", icon: User },
            { path: "/projects", label: "Projects", icon: Briefcase },
            { path: "/contact", label: "Contact", icon: Mail },
        ];

        return (
            <div className="flex flex-col items-center justify-center w-full">
                <ul className="w-full space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <li key={item.path} className="w-full">
                                <Link
                                    to={item.path}
                                    className={`group relative font-medium flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 w-full ${
                                        active
                                            ? "bg-white text-black"
                                            : isMobileSidebar
                                              ? "bg-background-card/50 hover:bg-background-button/70 text-gray-300"
                                              : "hover:bg-background-card text-gray-400 hover:text-white"
                                    }`}
                                    onClick={onClick}
                                >
                                    <Icon
                                        size={20}
                                        className={active ? "text-black" : ""}
                                    />
                                    <span className="flex-1">{item.label}</span>
                                    {active && (
                                        <ChevronRight
                                            size={18}
                                            className="text-black"
                                        />
                                    )}
                                    {!isMobileSidebar && active && (
                                        <motion.div
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                                            layoutId="activeIndicator"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <>
            {isMobile && <MobileHeader />}
            {isMobile && <MobileSidebar />}
            {!isMobile && <DesktopSidebar />}
        </>
    );
};

export default Sidebar;
