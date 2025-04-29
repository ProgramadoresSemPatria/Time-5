import DashboardSidebar from "@/components/dashboard-sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <div>
          <DashboardSidebar />
        </div>

        <div className="max-h-screen w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
