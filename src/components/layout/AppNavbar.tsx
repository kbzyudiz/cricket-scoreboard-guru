
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Menu, X } from "lucide-react";

export function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user") || "null");
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/login");
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <img
                src="/assets/logo.svg"
                alt="Cricket Scoreboard Guru Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="font-bold text-xl hidden sm:inline">Cricket Scoreboard Guru</span>
              <span className="font-bold text-xl sm:hidden">CSG</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {user && (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-primary">
                  Dashboard
                </Link>
                <Link to="/teams" className="text-gray-700 hover:text-primary">
                  Teams
                </Link>
                <Link to="/matches" className="text-gray-700 hover:text-primary">
                  Matches
                </Link>
                <Link to="/leaderboard" className="text-gray-700 hover:text-primary">
                  Leaderboard
                </Link>
                {user.role === "admin" && (
                  <Link to="/admin" className="text-gray-700 hover:text-primary">
                    Admin
                  </Link>
                )}
                <Button variant="outline" onClick={handleLogout}>
                  Log out
                </Button>
              </>
            )}
            {!user && (
              <>
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-2">
            {user ? (
              <>
                <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-primary">
                  Dashboard
                </Link>
                <Link to="/teams" className="block py-2 text-gray-700 hover:text-primary">
                  Teams
                </Link>
                <Link to="/matches" className="block py-2 text-gray-700 hover:text-primary">
                  Matches
                </Link>
                <Link to="/leaderboard" className="block py-2 text-gray-700 hover:text-primary">
                  Leaderboard
                </Link>
                {user.role === "admin" && (
                  <Link to="/admin" className="block py-2 text-gray-700 hover:text-primary">
                    Admin
                  </Link>
                )}
                <Button variant="outline" onClick={handleLogout} className="w-full mt-2">
                  Log out
                </Button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 py-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
