import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import "../index.css";
import { BiHome } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    <header className="fixed top-0 left-0 right-0 h-16 bg-background-sidebar flex items-center justify-between px-4 z-50">
      <button onClick={toggleSidebar} className="text-white p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className="flex items-center">
        <text className="text-lg font-medium mr-4">Sharan Shrivatsav</text>
      </div>
    </header>
  );

  // Desktop sidebar
  const DesktopSidebar = () => (
    <aside className="h-screen w-[280px] min-w-[30vh] flex-shrink-0 hidden md:block">
      <nav className="h-full flex flex-col items-center bg-background-sidebar">
        <div className="p-4 pb-2 items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <img
              alt="Favicon"
              src="https://avatars.githubusercontent.com/u/161939687?v=4"
              className="w-20 mt-5 rounded-4xl"
            />
            <text className="mt-4 text-xl text-center">Sharan Shrivatsav</text>
            <text className="my-2 text-sm text-center leading-1 text-neutral-400">
              FrontEnd Developer
            </text>
          </div>
          <div className="flex flex-row justify-between px-14 py- pt-6">
            <Github size={30} className="box-content text-background-button" />
            <Linkedin
              size={30}
              className="box-content text-background-button"
            />
            <Instagram
              size={30}
              className="box-content text-background-button"
            />
          </div>
        </div>
        <NavLinks />
      </nav>
    </aside>
  );

  // Mobile sidebar (slide-in)
  const MobileSidebar = () => (
    <div
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={toggleSidebar}
      ></div>
      <nav className="relative h-full w-64 bg-background-sidebar flex flex-col pt-20">
        <NavLinks onClick={toggleSidebar} />
      </nav>
    </div>
  );

  // Navigation links component
  const NavLinks = ({ onClick = () => {} }) => (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <ul className="flex flex-col items-start justify-center w-full px-10 space-y-2">
        <li className="w-full">
          <Link
            to="/"
            className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
            onClick={onClick}
          >
            <BiHome size={20} />
            <span>Home</span>
          </Link>
        </li>

        <li className="w-full">
          <Link
            to="/about"
            className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
            onClick={onClick}
          >
            <AiOutlineUser size={20} />
            <span>About</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/projects"
            className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
            onClick={onClick}
          >
            <BsBriefcase size={20} />
            <span>Projects</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/store"
            className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
            onClick={onClick}
          >
            <MdOutlineShoppingCart size={20} />
            <span>Store</span>
          </Link>
        </li>
        <li className="w-full">
          <Link
            to="/contact"
            className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
            onClick={onClick}
          >
            <MdOutlineEmail size={20} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {isMobile && <MobileHeader />}
      {isMobile && <MobileSidebar />}
      {!isMobile && <DesktopSidebar />}
    </>
  );
};

export default Sidebar;
