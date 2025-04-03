import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import "../index.css";
import { Link } from "react-router-dom";

interface StoreItemProps {
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  link?: string;
}

const StoreItem = ({
  title,
  price,
  imageUrl,
  description,
  link,
}: StoreItemProps) => {
  const content = (
    <div className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="h-64 overflow-hidden bg-background-card rounded-2xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg"; // Fallback image
          }}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-green-500 font-semibold">{price}</span>
        </div>
        <p className="text-sm text-gray-400 mb-3">{description}</p>
        <Button className="w-full py-2 bg-background-card hover:bg-background-primary text-white rounded-xl flex items-center justify-center gap-2">
          <span>View Details</span>
          <ArrowRightIcon size={14} />
        </Button>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="w-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default function Store() {
  const storeItems = [
    {
      title: "UI Component Library",
      price: "$49",
      imageUrl: "/placeholder.svg",
      description:
        "A collection of premium UI components for modern web applications",
      link: "/store/ui-components",
    },
    {
      title: "Portfolio Template",
      price: "$29",
      imageUrl: "/placeholder.svg",
      description:
        "Professional portfolio template for developers and designers",
      link: "/store/portfolio-template",
    },
    {
      title: "Design System",
      price: "$79",
      imageUrl: "/placeholder.svg",
      description:
        "Complete design system with Figma files and code implementation",
      link: "/store/design-system",
    },
    {
      title: "React Hooks Collection",
      price: "$19",
      imageUrl: "/placeholder.svg",
      description:
        "Custom React hooks for common UI patterns and functionality",
      link: "/store/react-hooks",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-background-button/70 text-orange-500 text-xs mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Digital Products
          </div>
          <h1 className="text-4xl font-bold mb-2">Store</h1>
          <p className="text-gray-400">
            Premium digital products and resources for developers and designers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {storeItems.map((item, index) => (
            <StoreItem
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>

        <div className="bg-background-card p-8 rounded-2xl mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Custom Development</h2>
              <p className="text-gray-400 mb-4">
                Need something custom-built for your project? I offer tailored
                development services.
              </p>
              <Link to="/contact">
                <Button className="group py-3 text-md bg-white text-black rounded-2xl hover:bg-background-primary hover:text-white">
                  <span className="">Get in Touch</span>
                  <ArrowRightIcon
                    className="-me-1 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
            <div className="bg-background-button/20 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Services include:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Custom web application development</li>
                <li>UI/UX design and implementation</li>
                <li>Performance optimization</li>
                <li>Code review and refactoring</li>
              </ul>
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
