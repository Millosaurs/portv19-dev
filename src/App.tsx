import Sidebar from "./comp/sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 bg-background-main md:m-4 mt-16 md:mt-4 rounded-2xl p-4 md:p-8 md:px-46 md:pt-32 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
