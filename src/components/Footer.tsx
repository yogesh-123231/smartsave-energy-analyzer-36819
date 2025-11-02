import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/home" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/home" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/home" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/home" className="hover:text-primary transition-colors">
              Smart City Impact
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            SmartSave © 2025 | Powered by CleanTech Vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
