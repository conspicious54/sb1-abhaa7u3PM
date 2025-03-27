import React from 'react';
import { Rocket, Target, Zap as Lightning, Users } from 'lucide-react';

export function Team() {
  return (
    <div className="px-6 md:px-12 py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're a team of Amazon specialists dedicated to scaling brands through data-driven strategies and proven expertise.
          </p>
        </div>

        <div className="text-center mb-20">
          <h3 className="text-[2.5rem] leading-tight mb-16 max-w-[90%] mx-auto">
            <div className="flex items-center gap-2 justify-center">
              <span className="font-bold">Our flexible team</span>
              <div className="flex -space-x-4">
                <img src="https://i.pravatar.cc/100?img=1" alt="Team Member" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Team Member" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Team Member" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=4" alt="Team Member" className="w-12 h-12 rounded-full border-2 border-white" />
              </div>
            </div>
            <div className="font-bold mt-4">
              has a wide range of skills, which lets us look at projects from a complete point of view that combines creativity <span className="text-4xl">🎨</span> and usefulness <span className="text-4xl">✨</span>.
            </div>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">12<span className="text-[#4D7CFF]">+</span></div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">14.3M<span className="text-[#4D7CFF]">+</span></div>
              <div className="text-gray-600">Total Revenue</div>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
              <div className="text-5xl font-bold text-gray-900 mb-2">400<span className="text-[#4D7CFF]">+</span></div>
              <div className="text-gray-600">Success Cases</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Travis Marziani */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-3 aspect-h-4">
              <img 
                src="https://yt3.googleusercontent.com/i8QyOXvpeMckQ0LPnVTwFjks-org7y9rP-2eSNPYdBPZuDDMBk3wznHbwa7oQfbT763spDyFjA=s900-c-k-c0x00ffffff-no-rj"
                alt="Travis Marziani"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Travis Marziani</h3>
              <p className="text-[#4D7CFF] font-medium mb-3">Amazon YouTuber + 8 Figure Seller</p>
              <p className="text-gray-600">Scaling Amazon brands through strategic optimization and proven growth tactics.</p>
            </div>
          </div>

          {/* Mina Elias */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-3 aspect-h-4">
              <img 
                src="https://www.junglescout.com/wp-content/uploads/2024/07/Mina-Elias.png"
                alt="Mina Elias"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mina Elias</h3>
              <p className="text-[#4D7CFF] font-medium mb-3">PPC Expert + Former Student</p>
              <p className="text-gray-600">Maximizing ROI through data-driven Amazon advertising strategies.</p>
            </div>
          </div>

          {/* Team Overview */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-3 aspect-h-4 bg-[#4D7CFF]/5 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Users className="w-16 h-16 text-[#4D7CFF]" />
                    <div className="absolute -top-2 -right-2 bg-[#4D7CFF] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      10+
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {['SEO Specialists', 'PPC Managers', 'Content Writers', 'Data Analysts'].map((role, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#4D7CFF]"></div>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team Members</h3>
              <p className="text-[#4D7CFF] font-medium mb-3">Specialized Amazon Experts</p>
              <p className="text-gray-600">A diverse team of specialists working together to drive your success.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#4D7CFF]/30 transition-all duration-300">
            <Lightning className="w-8 h-8 text-[#4D7CFF] mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Amazon Expertise</h4>
            <p className="text-gray-600">Deep understanding of Amazon's algorithm and marketplace dynamics.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#4D7CFF]/30 transition-all duration-300">
            <Rocket className="w-8 h-8 text-[#4D7CFF] mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h4>
            <p className="text-gray-600">Track record of scaling brands to 7 and 8 figures on Amazon.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-[#4D7CFF]/30 transition-all duration-300">
            <Target className="w-8 h-8 text-[#4D7CFF] mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven</h4>
            <p className="text-gray-600">Strategic decisions backed by comprehensive market analysis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}