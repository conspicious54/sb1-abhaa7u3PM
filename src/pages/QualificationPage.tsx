import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function QualificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111111] to-[#1a1a1a] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Congratulations! You Qualify For Our
            <span className="text-[#4D7CFF] block mt-2">
              Amazon PPC Management Program
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            You're just one step away from transforming your Amazon business
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4D7CFF]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#4D7CFF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
              <p className="text-gray-400">Active Clients</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4D7CFF]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#4D7CFF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">146%</h3>
              <p className="text-gray-400">Average ROAS Increase</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#4D7CFF]/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#4D7CFF]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$50M+</h3>
              <p className="text-gray-400">Ad Spend Managed</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1pPf76SX82EFxq65ViEFVzOLzhWgGhCxVuhNAKEAWGbb3_lEF6Q1rfYLp0DvrBKMDBMpWgG8eG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4D7CFF] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3D6CFF] transition-all duration-300 hover:scale-105 transform group"
            >
              Schedule Your Strategy Call Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">What You'll Get</h3>
            <ul className="space-y-4">
              {[
                'Custom PPC Strategy Development',
                'Dedicated Account Manager',
                'Weekly Performance Reports',
                'Competitor Analysis',
                'Ongoing Optimization'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4D7CFF] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              {[
                'Proven Track Record of Success',
                'Expert Team of Amazon PPC Specialists',
                'Data-Driven Approach',
                'Transparent Reporting',
                'Continuous Strategy Optimization'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#4D7CFF] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}