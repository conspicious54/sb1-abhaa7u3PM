import React from 'react';

export function Brands() {
  return (
    <div className="px-6 md:px-12 py-16 bg-white relative">
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by Leading Brands</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          <div className="flex justify-center">
            <img 
              src="https://triviumco.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mighty-petz-logo.png.webp" 
              alt="Mighty Petz" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://triviumco.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/fittea_logo.png.webp" 
              alt="FitTea" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://thepeakprimal.com/cdn/shop/files/Peak_Primal_Logo_7_190x.png?v=1738197504" 
              alt="Peak Primal" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://neurogum.com/cdn/shop/files/NeuroLogo_v2_1.png?crop=center&height=120&v=1710525760&width=324" 
              alt="NeuroGum" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://cdn.faire.com/fastly/19041dddb36c6ce5136a0730dcdcf8006f66fe8589cfe8106943d3e2064cc9c0.png" 
              alt="Faire" 
              className="h-8 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.getbento.com/accounts/ee5aaf463e6eb3ed06b018bc15172199/media/images/40260MMagic_PrimaryLogoDark.png" 
              alt="MMagic" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}