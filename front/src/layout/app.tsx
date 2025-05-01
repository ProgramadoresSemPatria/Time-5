import DashboardSidebar from "@/components/dashboard-sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row min-h-screen font-dmsans">
        <div>
          <DashboardSidebar />
        </div>

        <div className="min-h-screen w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
