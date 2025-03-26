import React from 'react';

export function Brands() {
  return (
    <div className="px-6 md:px-12 py-16 bg-white relative">
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 mb-8">Trusted by Leading Brands</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="Slack" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Zoom_logo.png/640px-Zoom_logo.png" alt="Zoom" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="Airbnb" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="Spotify" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Amazon_logo_PNG1.png/2560px-Amazon_logo_PNG1.png" alt="Amazon" className="h-8 object-contain" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="Shopify" className="h-8 object-contain" />
        </div>
      </div>
    </div>
  );
}