import React from 'react';
import { ArrowRight } from 'lucide-react';

export function QualificationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111111] to-[#1a1a1a]">
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            You Qualify For Our Amazon<br />
            <span className="text-[#4D7CFF]">PPC Management Program</span>
          </h1>
          
          {/* Video Placeholder */}
          <div className="aspect-video bg-black/30 rounded-2xl mb-12 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-white/60 text-xl">Video Coming Soon</div>
          </div>

          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1pPf76SX82EFxq65ViEFVzOLzhWgGhCxVuhNAKEAWGbb3_lEF6Q1rfYLp0DvrBKMDBMpWgG8eG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4D7CFF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3D6CFF] transition-all duration-300 hover:scale-105 transform group"
          >
            Book a Call Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Additional Content */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-gray-400">Active Clients</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">146%</div>
            <div className="text-gray-400">Average ROAS Increase</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="text-3xl font-bold text-white mb-2">$50M+</div>
            <div className="text-gray-400">Ad Spend Managed</div>
          </div>
        </div>
      </div>
    </main>
  );
}