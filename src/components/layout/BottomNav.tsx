
import { Link, useLocation } from "react-router-dom";
import { Home, Users, BarChart, Award, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user") || "null");
  
  // If user is not logged in, don't show the bottom nav
  if (!user) return null;
  
  const navItems = [
    {
      label: "Home",
      icon: Home,
      href: "/dashboard",
    },
    {
      label: "Teams",
      icon: Users,
      href: "/teams",
    },
    {
      label: "Matches",
      icon: BarChart,
      href: "/matches",
    },
    {
      label: "Leaderboard",
      icon: Award,
      href: "/leaderboard",
    },
  ];
  
  // Add admin link for admin users
  if (user?.role === "admin") {
    navItems.push({
      label: "Admin",
      icon: Settings,
      href: "/admin",
    });
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="grid grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex flex-col items-center py-2 text-xs",
              location.pathname === item.href
                ? "text-primary"
                : "text-gray-500 hover:text-gray-900"
            )}
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
