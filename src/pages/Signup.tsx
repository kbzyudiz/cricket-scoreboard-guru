
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join Cricket Scoreboard Guru and start predicting matches."
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
