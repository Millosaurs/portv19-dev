export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  date: string;
}

export const projectsData: Record<string, ProjectData> = {
  gamestash: {
    id: "gamestash",
    title: "Gamestash - Digital Game Asset Store",
    description: "A digital game asset store for gamers and developers.",
    longDescription:
      "Gamestash is a digital game asset store for gamers and developers. It offers a wide range of game assets, including textures, models, and shaders. It also features a user-friendly interface and a secure payment system.",
    imageUrl: "/gamestash/image.png",
    technologies: [
      "React",
      "NextJs",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Neon (Postgres)",
      "Drizzle",
      "Better auth",
      "Polar (Stripe)",
      "Wise - (null)",
    ],
    liveUrl: "https://gamestash.net/",
    githubUrl: "https://github.com/Millosaurs/Gamestash",
    features: [
      "Script marketplace: browse, purchase, and sell code scripts",
      "Modern UI built with Radix UI components and Tailwind CSS",
      "Dark and light mode support with next-themes",
      "Analytics dashboard to track script performance",
      "Secure user authentication system (social logins only)",
      "PostgreSQL database powered by Drizzle ORM",
      "Responsive, mobile-first design",
      "Advanced search and filtering for assets by type, style, engine, and price",
      "Secure payment system with Stripe integration",
      "Instant digital downloads after purchase",
      "Asset licensing information clearly displayed",
      "Developer dashboard for uploading and managing assets",
      "Wishlist and favorites for users",
      "Ratings and reviews for assets",
      "Regularly updated with new assets and collections",
      "Support for multiple file formats (FBX, PNG, WAV, etc.)",
      "Community features: user profiles, following creators, and messaging",
      "Integration with modern game engines (Unity, Unreal, Godot)",
      "Promotional sales and featured assets",
      "API documentation and developer tools",
      "Customer support and help center",
    ],
    date: "July 2025",
  },
  resqr: {
    id: "resqr",
    title: "ResQr - resturant management application",
    description:
      "A simple and sleak resturant management app for resturant owners and staff.",
    longDescription:
      "This SaaS application empowers restaurant owners to create digital menus accessible via QR codes. It offers a seamless experience for customers to view menus and provide feedback, while enabling restaurant owners to manage their offerings efficiently.",
    imageUrl: "/resqr/image.png",
    technologies: [
      "React",
      "NextJs",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
      "Neon (Postgres)",
      "Drizzle",
      "Better auth",
      "Polar (Stripe)",
      "Wise - (null)",
    ],
    liveUrl: "https://resqr.shrivatsav.dev/",
    githubUrl: "",
    features: [
      "Clean and modern design",
      "Responsive layout for various devices",
      "Real-time Analytics - Track performance metrics that matter",
      "Instant optimisations - AI-powered recommendations for efficiency",
      "Multi ~ Location Support - Scale across all your restaurant locations",
      "Enteripise Security - Bank-level security for your data",
      "SEO optimized for better visibility",
      "Customizable and easy to maintain",
    ],
    date: "May 2025",
  },
  notebook: {
    id: "notebook-app",
    title: "NoteBook-App",
    description: "A clean, minimal note-taking application",
    longDescription:
      "Orangy is a modern note-taking application designed to help users organize their thoughts, tasks, and ideas in a clean, intuitive interface. The application features real-time synchronization, markdown support, and customizable organization systems.",
    imageUrl: "/Orangy/image.png",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://note-book-gamma.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/NoteBook",
    features: [
      "Real-time synchronization across devices",
      "Markdown support for rich text formatting",
      "Customizable organization with tags and folders",
      "Dark and light theme options",
      "Offline capability with local storage",
    ],
    date: "June 2023",
  },
  act: {
    id: "act",
    title: "Achievement Tracker",
    description:
      "Track and showcase your personal and professional achievements",
    longDescription:
      "Achievement Tracker is a comprehensive platform that helps users document, organize, and showcase their personal and professional accomplishments. The application provides customizable templates, data visualization, and sharing capabilities.",
    imageUrl: "/ArcHide/image.png",
    technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
    liveUrl: "https://arc-hide.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/ArcHide",
    features: [
      "Customizable achievement templates",
      "Data visualization of progress over time",
      "Public profile sharing options",
      "Integration with LinkedIn and other platforms",
      "Resume generation based on achievements",
    ],
    date: "September 2023",
  },
  heroic: {
    id: "heroic-showcase",
    title: "ShowCase for Heroic Studios",
    description: "Crafting Immersive Minecraft Experiences for Players",
    longDescription:
      "A comprehensive showcase platform for Heroic Studios' Minecraft server configurations and setups. Features custom plugin configurations, server optimization techniques, and unique gameplay mechanics designed to enhance player experience. Includes detailed documentation of server architecture, performance tuning, and custom-built features.",
    imageUrl: "/heroic/image.png",
    technologies: ["React", "Vite", "Node.js", "Bun", "Tailwind"],
    liveUrl: "https://heroic-studio.vercel.app/",
    githubUrl: "https://github.com/Millosaurs/heroic-studio-showcase",
    features: [
      "Custom plugin configuration showcase",
      "Server optimization demonstrations",
      "Interactive gameplay mechanics preview",
      "Performance metrics visualization",
      "Documentation and setup guides",
    ],
    date: "May 2025",
  },
  "koala-hosting": {
    id: "Koala-Hosting",
    title: "Koala Hosting Landing Page",
    description: "A modern and responsive landing page for Koala Hosting",
    longDescription:
      "A modern and responsive landing page for Koala Hosting, a reliable and secure hosting provider. The page features a clean and intuitive design, showcasing the hosting services and benefits. It also includes a contact form and social media links for easy communication with potential customers.",
    imageUrl: "/koala-hosting/image.png",
    technologies: [
      "React",
      "NextJs",
      "Tailwind CSS",
      "Shadcn UI",
      "TypeScript",
    ],
    liveUrl: "https://koala-dev.shrivatsav.dev/",
    githubUrl: "",
    features: [
      "Clean and modern design",
      "Responsive layout for various devices",
      "Contact form for easy communication",
      "Social media links for easy access",
      "SEO optimized for better visibility",
      "Customizable and easy to maintain",
    ],
    date: "May 2025",
  },
};

export const projects = [
  {
    title: "ResQr - Resturant management application",
    imageUrl: "/resqr/image.png",
    link: "/projects/resqr",
  },
  {
    title: "Gamestash - Digital Game Asset Store",
    imageUrl: "/gamestash/image.png",
    link: "/projects/gamestash",
  },
  {
    title: "Achievement Tracker",
    imageUrl: "/ArcHide/image.png",
    link: "/projects/act",
  },
  {
    title: "NoteBook-App",
    creator: "Sharan Shrivatsav",
    imageUrl: "/Orangy/image.png",
    link: "/projects/notebook",
  },
  {
    title: "Heroic Showcase",
    imageUrl: "/heroic/image.png",
    link: "/projects/heroic",
  },
  {
    title: "Koala Hosting Landing Page",
    imageUrl: "/koala-hosting/image.png",
    link: "/projects/koala-hosting",
  },
];


