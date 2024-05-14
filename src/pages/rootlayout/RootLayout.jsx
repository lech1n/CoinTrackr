import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import Aside from "../../components/Aside";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
  return (
    <main className="bg-bg-color-l dark:bg-bg-color-d m-0">
      <div className="rootlayout_container relative text-black-txt  h-dvh w-dvh min-h-[250px] min-w-[250px]">
        <div className="fixed p-2 lg:p-3 xl:p-4">
          <Aside />
        </div>
        <div className="outlet">
          <div className="navbar  w-full pt-2 px-2 lg:pt-3 xl:pt-4">
            <Navbar />
          </div>
          <div className="outlet-container">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
