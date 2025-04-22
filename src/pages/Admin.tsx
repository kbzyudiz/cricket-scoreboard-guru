
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if user is admin
    const user = JSON.parse(localStorage.getItem("user") || "null");
    
    if (!user || user.role !== "admin") {
      toast({
        title: "Access Denied",
        description: "You do not have permission to access the admin panel",
        variant: "destructive",
      });
      navigate("/dashboard");
    }
  }, [navigate, toast]);
  
  return (
    <AppLayout>
      <AdminDashboard />
    </AppLayout>
  );
};

export default Admin;
