import Sidebar from "./comp/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

  // Add scroll reset effect directly in App component
  useEffect(() => {
    const mainContent = document.querySelector(".overflow-y-auto");
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 bg-background-main md:m-4 mt-16 md:mt-4 rounded-2xl p-4 md:p-8 md:pt-32 h-full overflow-y-auto max-w-screen-9xl">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
