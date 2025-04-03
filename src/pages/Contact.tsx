import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import "../index.css";
import { FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiIndeed } from "react-icons/si";
import { MdEmail, MdPlace } from "react-icons/md";

export default function Contact() {
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
                      href="mailto:sharan.shrivatsav@example.com"
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
                  href="https://www.fiverr.com/sharan_shrivatsav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-card p-5 rounded-2xl flex items-center gap-4 hover:bg-background-primary transition-colors"
                >
                  <div className="bg-green-500/10 p-3 rounded-full">
                    <SiFiverr className="text-2xl text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Fiverr</h3>
                    <p className="text-gray-400 text-sm">Freelance services</p>
                  </div>
                </a>

                <a
                  href="https://www.indeed.com/profile/sharan-shrivatsav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background-card p-5 rounded-2xl flex items-center gap-4 hover:bg-background-primary transition-colors"
                >
                  <div className="bg-blue-400/10 p-3 rounded-full">
                    <SiIndeed className="text-2xl text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Indeed</h3>
                    <p className="text-gray-400 text-sm">Job opportunities</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form or additional info */}
          <div className="bg-background-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Quick Message</h2>
            <p className="text-gray-300 mb-6">
              Have a specific project in mind? Let me know the details and I'll
              get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-background-primary border border-background-button rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-background-primary border border-background-button rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-background-primary border border-background-button rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button className="w-full py-3 text-md bg-white text-black rounded-2xl hover:bg-teal-500 hover:text-white">
                <span>Send Message</span>
                <ArrowRightIcon
                  className="-me-1 transition-transform group-hover:translate-x-0.5"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
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
