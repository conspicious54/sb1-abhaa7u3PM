import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
          <span>© Copyright Primemate LLC 2025</span>
          <div className="flex items-center gap-4">
            <Link 
              to="/terms" 
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="hidden md:inline">•</span>
            <Link 
              to="/privacy" 
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}