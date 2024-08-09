import { Header } from "@/components/layouts/root/header";
import Sidebar from "@/components/layouts/root/sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
