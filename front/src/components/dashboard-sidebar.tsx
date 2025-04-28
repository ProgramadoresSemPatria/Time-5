import { Link } from "react-router-dom";
import {
  Briefcase,
  Home,
  BarChart2,
  FileText,
  Settings,
  Calendar,
  MessageSquare,
  LogOut,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-purple-gradient text-white min-h-screen">
      <div className="p-4 border-b border-purple-700">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          <span className="font-bold text-xl">Career Manager</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/applications"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <Briefcase className="h-5 w-5" />
              Applications
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/interviews"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Interviews
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/resumes"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <FileText className="h-5 w-5" />
              Resumes
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/analytics"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <BarChart2 className="h-5 w-5" />
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/messages"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-purple-700">
        <ul className="space-y-1">
          <li>
            <Link
              to="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
