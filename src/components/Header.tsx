
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#D6BFAF]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#B14D4D]">Mi Media Global</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            Portfolio
          </Link>
          <Link to="/blog" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
          <Button variant="outline" className="border-[#B14D4D] text-[#B14D4D] hover:bg-[#B14D4D] hover:text-white">
            <Link to="mailto:hello@mimediaglobal.com">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button 
            className="p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#D6BFAF]">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-sm font-medium text-[#1A1A1A] hover:text-[#B14D4D] transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="outline" className="mt-2 border-[#B14D4D] text-[#B14D4D] hover:bg-[#B14D4D] hover:text-white">
              <Link to="mailto:hello@mimediaglobal.com" onClick={toggleMenu}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
