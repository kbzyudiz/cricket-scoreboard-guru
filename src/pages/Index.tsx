
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user") || "null");
    
    if (user) {
      // If logged in, redirect to dashboard
      navigate("/dashboard");
    } else {
      // If not logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);
  
  return null; // This component doesn't render anything, just redirects
};

export default Index;
