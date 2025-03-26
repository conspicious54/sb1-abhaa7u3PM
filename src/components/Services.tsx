import React, { useState } from 'react';
import { Search, LineChart, Globe, Instagram, DollarSign, Mail } from 'lucide-react';

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="px-6 md:px-12 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Search,
            title: "Search Engine\nOptimization (SEO)",
            description: "We employ ultimate strategic SEO to enhance your product's ranking on Amazon."
          },
          {
            icon: LineChart,
            title: "Conversion Rate\nOptimization (CRO)",
            description: "Optimize your product listings to increase conversion rates and drive more sales."
          },
          {
            icon: Globe,
            title: "Online Reputation\nManagement (ORM)",
            description: "Maintain and improve your brand's reputation through strategic review management."
          },
          {
            icon: Instagram,
            title: "Social Media\nMarketing",
            description: "Amplify your brand presence and drive traffic through strategic social media campaigns."
          },
          {
            icon: DollarSign,
            title: "Pay Per Click\n(PPC)",
            description: "Strategic Amazon advertising campaigns that maximize ROI and drive sales growth."
          },
          {
            icon: Mail,
            title: "Email Marketing\nAutomation",
            description: "Automated email campaigns that nurture customer relationships and drive repeat sales."
          }
        ].map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#4D7CFF]/30 transition-all duration-300 hover:scale-105 transform hover:shadow-xl cursor-pointer"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-[#4D7CFF]/10 transition-colors mb-6">
              <service.icon className={`w-6 h-6 ${hoveredService === index ? 'text-[#4D7CFF]' : 'text-gray-600'} transition-colors`} />
            </div>
            <h3 className="text-xl font-semibold mb-4 whitespace-pre-line">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}