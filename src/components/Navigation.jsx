import { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { useApp } from '../utils/AppContext';

const Navigation = () => {
  const { currentStep, setCurrentStep, resetApp } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    resetApp();
  };

  const navItems = [
    { label: 'How It Works', action: () => setCurrentStep('landing') },
    { label: 'Browse Designers', action: () => setCurrentStep('designers') },
    { label: 'Sign Up', action: () => alert('Sign up feature coming soon!') }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 text-primary-600 font-bold text-xl hover:text-primary-700 transition-colors"
            >
              <Home className="w-6 h-6" />
              <span>DesignMate</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

