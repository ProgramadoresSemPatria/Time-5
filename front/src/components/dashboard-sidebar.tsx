import { NavLink } from "react-router-dom";
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
import toast from "react-hot-toast";
import { toastSuccessStyle } from "@/lib/toast-success-style";
import { useContext } from "react";
import { authContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
//@ TODO: IMPLEMENT LOGOUT FUNCTION

export default function DashboardSidebar() {
  const { signOut } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <div className="h-full min-h-screen hidden md:flex flex-col w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white">
      <div className="p-4 border-b border-purple-700">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          <span className="font-bold text-xl">Career Manager</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <Home className="h-5 w-5" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile-page"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <Briefcase className="h-5 w-5" />
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              // @TODO: CREATE INTERVIEWS SECTION
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <Calendar className="h-5 w-5" />
              Interviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv-manager"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <FileText className="h-5 w-5" />
              CV Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <BarChart2 className="h-5 w-5" />
              Analytics
            </NavLink>
          </li>
          <li>
            <NavLink
              //@TODO: THIS IS AN EXAMPLE. LATER WE WILL DECIDE WHICH SECTION WILL BE HERE.
              to="/messages"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`
              }
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-purple-700">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-white/80 hover:bg-white/10 transition-colors"
            >
              <Settings className="h-5 w-5" />
              Settings
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                signOut();
                toast.success("See you later!", toastSuccessStyle);
                navigate("/sign-in");
              }}
              className="flex items-center pl-3 rounded-lg transition-colors hover:text-foreground pt-10 gap-4 outline-none"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
