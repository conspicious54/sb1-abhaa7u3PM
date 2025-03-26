import React from 'react';
import { Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ContactPage() {
  const navigate = useNavigate();

  const handleAuditClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg">
              We're here to help you succeed on Amazon
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <div className="flex items-start gap-4 mb-8">
              <AlertCircle className="w-6 h-6 text-[#4D7CFF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Looking for a Free Amazon Audit?</h3>
                <p className="text-gray-600 mb-4">
                  Get a comprehensive analysis of your Amazon presence and discover untapped growth opportunities with our free audit service.
                </p>
                <button 
                  onClick={handleAuditClick}
                  className="group inline-flex items-center gap-2 bg-[#4D7CFF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3D6CFF] transition-all duration-300 hover:scale-105 transform"
                >
                  Get A Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#4D7CFF] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Other Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  For any other questions or specific inquiries, please feel free to reach out to our support team:
                </p>
                <a 
                  href="mailto:support@primemate.io"
                  className="inline-flex items-center gap-2 text-[#4D7CFF] font-medium hover:text-[#3D6CFF] transition-colors"
                >
                  support@primemate.io
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}