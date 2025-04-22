
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cricket-dark-green to-cricket-light-green p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        <div className="mb-6 flex flex-col items-center">
          <img 
            src="/assets/logo.svg" 
            alt="Cricket Scoreboard Guru Logo" 
            className="h-20 w-20 mb-4"
          />
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="text-white/80 text-center mt-2">{subtitle}</p>
          )}
        </div>
        
        <div className="w-full bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
