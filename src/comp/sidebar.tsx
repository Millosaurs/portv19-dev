import { Github, Instagram, Linkedin } from "lucide-react";
import "../index.css";
import { BiHome } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[280px] min-w-[30vh] flex-shrink-0">
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
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <ul className="flex flex-col items-start justify-center w-full px-10 space-y-2">
            <li className="w-full">
              <Link
                to="/"
                className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
              >
                <BiHome size={20} />
                <span>Home</span>
              </Link>
            </li>

            <li className="w-full">
              <Link
                to="/about"
                className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
              >
                <AiOutlineUser size={20} />
                <span>About</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/projects"
                className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
              >
                <BsBriefcase size={20} />
                <span>Projects</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/blog"
                className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
              >
                <FiFileText size={20} />
                <span>Blog</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                to="/contact"
                className="font-medium flex items-center gap-3 px-3 p-2 hover:bg-background-primary/60 focus:bg-background-primary rounded-2xl w-full"
              >
                <MdOutlineEmail size={20} />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
