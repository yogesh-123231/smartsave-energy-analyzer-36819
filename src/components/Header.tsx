import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl">SmartSave</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/home" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/home') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/upload" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/upload') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Analyze
          </Link>
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Dashboard
          </Link>
        </nav>
        
        <Button size="sm" className="hidden md:flex">
          Get Pro
        </Button>
      </div>
    </header>
  );
};

export default Header;
