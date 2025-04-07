
import { Leaf, User, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlotNavigation } from "./PlotNavigation";
import { Link } from "react-router-dom";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-sasya-green/90">
              <Leaf className="h-5 w-5 text-white" />
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
          <PlotNavigation />
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
          
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
        </nav>
      </div>
      
      <div className="md:hidden border-t bg-background px-4 py-2">
        <PlotNavigation />
      </div>
    </header>
  );
};
