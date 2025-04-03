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
        
        {/* Your existing or future contact page content would go here */}
        <div className="mt-6">
          <p className="text-gray-300">
            I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something, or just want to say hello, then get in touch.
          </p>
        </div>
        
        {/* Footer section */}
        <div className="mt-24 pt-8 border-t-2 border-background-card">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">Sharan Shrivatsav · ©2024</div>
            <div>Edited Times - 114</div>
          </div>
        </div>
      </div>
    </div>
  );
}