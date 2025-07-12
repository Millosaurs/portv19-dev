import "../index.css";
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiIndeed } from "react-icons/si";
import { MdEmail, MdPlace } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For the X (Twitter) logo
import { useForm } from "react-hook-form";

// Define form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {} = useForm<FormData>();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-teal-500 text-xs mb-4">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            Get In Touch
          </div>
          <h1 className="text-4xl font-bold mb-2">Contact</h1>
          <p className="text-gray-400">
            Let's discuss your project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
          {/* Contact information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Feel free to reach out for collaborations, project inquiries, or
                just to say hello! I'm currently available for freelance work.
              </p>

              <div className="space-y-6">
                {/* Email contact */}
                <div className="flex items-center gap-4">
                  <div className="bg-background-card p-4 rounded-full">
                    <MdEmail className="text-2xl text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a
                      href="mailto:sharanshrivatsav0@gmail.com"
                      className="text-gray-300 hover:text-teal-500 transition-colors"
                    >
                      sharanshrivatsav0@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="bg-background-card p-4 rounded-full">
                    <MdPlace className="text-2xl text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-300">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Work Platforms */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="https://www.linkedin.com/in/sharan-shrivatsav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-card p-5 rounded-2xl flex items-center gap-4 hover:bg-background-primary transition-colors"
                >
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <FaLinkedin className="text-2xl text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">
                      Professional network
                    </p>
                  </div>
                </a>

                <a
                  href="https://discord.com/users/Millosaurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-card p-5 rounded-2xl flex items-center gap-4 hover:bg-background-primary transition-colors"
                >
                  <div className="bg-indigo-500/10 p-3 rounded-full">
                    <FaDiscord className="text-2xl text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Discord</h3>
                    <p className="text-gray-400 text-sm">Join my Discord</p>
                  </div>
                </a>

                <a
                  href="https://x.com/shrivatsav_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-card p-5 rounded-2xl flex items-center gap-4 hover:bg-background-primary transition-colors"
                >
                  <div className="bg-black/10 p-3 rounded-full">
                    <FaXTwitter className="text-2xl text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">X (Twitter)</h3>
                    <p className="text-gray-400 text-sm">Follow me on X</p>
                  </div>
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
    </div>
  );
}
