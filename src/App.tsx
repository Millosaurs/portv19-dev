import Sidebar from "./comp/sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="h-screen overflow-hidden">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 bg-background-main m-2 rounded-2xl p-8 px-46 pt-32 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
