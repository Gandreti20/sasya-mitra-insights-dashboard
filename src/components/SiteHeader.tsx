
import { TreePine, User, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const SiteHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real application, you would handle token/session cleanup here
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-sasya-green/90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.2)" />
                <path d="M15 8.5C15 10.433 13.433 12 11.5 12C9.567 12 8 10.433 8 8.5C8 6.567 9.567 5 11.5 5C13.433 5 15 6.567 15 8.5Z" stroke="currentColor" fill="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M12 12V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-sasya-green">
              Aedaa
            </h1>
          </Link>
          <div className="hidden md:block ml-4 pl-4 border-l h-8">
            <h2 className="text-lg font-medium">
              Sasya Mitra <span className="text-sm font-normal text-muted-foreground">A Modern Way of Farming</span>
            </h2>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          {/* Navigation items can go here if needed */}
        </div>
        
        <nav className="flex items-center gap-4">
          <Link to="/notifications">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </Link>
          
          <div className="border-l h-8 mx-2"></div>
          
          <Link to="/profile">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm">Ravi Kumar</span>
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </nav>
      </div>
      
      <div className="md:hidden border-t bg-background px-4 py-2">
        {/* Mobile navigation items can go here if needed */}
      </div>
    </header>
  );
};
