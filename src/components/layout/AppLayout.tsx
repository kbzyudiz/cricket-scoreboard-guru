
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppNavbar } from "./AppNavbar";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  requiresAuth?: boolean;
}

export function AppLayout({ children, requiresAuth = true }: AppLayoutProps) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Basic auth check
    if (requiresAuth) {
      const user = JSON.parse(localStorage.getItem("user") || "null");
      if (!user) {
        navigate("/login");
      }
    }
  }, [requiresAuth, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AppNavbar />
      <main className="flex-1 container mx-auto p-4 pt-20 pb-20 md:pb-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
