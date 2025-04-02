import { ReactNode } from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaFigma, FaHtml5, FaJs, FaReact, FaSlack } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";

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

export default function About() {
  return (
    <div className="w-full">
      <div className="mb-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">
            Sharan <span className="text-orange-500">Shrivatsav</span>{" "}
            <span className="text-yellow-400">👋</span>
          </h1>
          <h2 className="text-2xl text-gray-400 mb-6">
            Intermediate, Designer, Front-end Programmer.
          </h2>

          <div className="space-y-6 text-gray-300/40 text-xl leading-8 max-w-3xl">
            <p className="">
              Hi, I'm Sharan Shrivatsav, a Computer Science major with a passion
              for coding and freelancing. I love coffee and am skilled in
              various programming languages including JavaScript, HTML, CSS,
              Next.js, Python, Java, and C++. As a dedicated student and
              freelancer, I'm continually honing my technical abilities and
              exploring new opportunities in the tech world.
            </p>

            <p>
              I specialize in creating sleek, neat, and user-friendly websites
              that provide satisfaction to both our clients and myself. My focus
              is on designing intuitive interfaces that enhance the user
              experience while ensuring the aesthetics are modern and appealing.
              By leveraging the latest technologies and best practices in web
              development, I aim to deliver high-quality websites that meet the
              unique needs and goals of each client. My commitment to excellence
              ensures that every project is completed with precision, attention
              to detail, and a dedication to customer satisfaction.
            </p>
          </div>
        </div>

        <div className="md:w-1/4 flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/161939687?v=4"
            alt="Sharan Shrivatsav"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Web design</h3>
            <p className="text-gray-400">
              Creating beautiful, responsive websites with modern design
              principles.
            </p>
          </div>
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              User experience design
            </h3>
            <p className="text-gray-400">
              Crafting intuitive interfaces that enhance user satisfaction and
              engagement.
            </p>
          </div>
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              End-to-end product design
            </h3>
            <p className="text-gray-400">
              Handling the complete design process from concept to final
              implementation.
            </p>
          </div>
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">Fast production</h3>
            <p className="text-gray-400">
              Delivering high-quality projects with efficient turnaround times.
            </p>
          </div>
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">No code web dev</h3>
            <p className="text-gray-400">
              Building functional websites using no-code platforms for rapid
              deployment.
            </p>
          </div>
          <div className="bg-background-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Branding, visual identity design
            </h3>
            <p className="text-gray-400">
              Creating cohesive brand identities with distinctive visual
              elements.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Skill's</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Use the SkillCard component for each skill */}
          <SkillCard
            icon={
              <span className="">
                <FaReact />
              </span>
            }
            title="React"
          />
          <SkillCard
            icon={
              <span>
                <FiFramer />
              </span>
            }
            title="Framer"
          />
          <SkillCard
            icon={
              <span>
                <AiOutlineOpenAI />
              </span>
            }
            title="ChatGPT"
          />
          <SkillCard
            icon={
              <span>
                <FaSlack />
              </span>
            }
            title="Slack"
          />
          <SkillCard
            icon={
              <span>
                <FaFigma />
              </span>
            }
            title="Figma"
          />
          <SkillCard
            icon={
              <span>
                <FaWebflow />
              </span>
            }
            title="Webflow"
          />
          <SkillCard
            icon={
              <span>
                <FaHtml5 />
              </span>
            }
            title="HTML"
          />
          <SkillCard
            icon={
              <span>
                <FaJs />
              </span>
            }
            title="JavaScript"
          />
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
  );
}
