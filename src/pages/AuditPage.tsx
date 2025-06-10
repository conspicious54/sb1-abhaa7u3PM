import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function AuditPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector('script[src*="hsforms"]');
    
    if (!script) {
      script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      script.async = true;
      document.head.appendChild(script);
    }

    const createForm = () => {
      if (!formContainerRef.current || !window.hbspt) return;
      formContainerRef.current.innerHTML = '';
      
      window.hbspt.forms.create({
        region: "na1",
        portalId: "44368510",
        formId: "4b372e6a-82fa-4cf2-97b0-cfb6aaa3ff47",
        target: "#hubspot-form-container",
        formData: {
          email: email || ''
        }
      });
    };

    const handleScriptLoad = () => {
      if (window.hbspt) {
        createForm();
      } else {
        setTimeout(handleScriptLoad, 50);
      }
    };

    if (window.hbspt) {
      createForm();
    } else {
      script.addEventListener('load', handleScriptLoad);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
      }
    };
  }, [email]);

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Strategy Session
            </h1>
            <p className="text-gray-600 text-lg">
              Complete the form below to receive your comprehensive Amazon store analysis
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div id="hubspot-form-container" ref={formContainerRef}></div>
          </div>
        </div>
      </div>
    </main>
  );
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          formData?: {
            email?: string;
          };
        }) => void;
      };
    };
  }
}