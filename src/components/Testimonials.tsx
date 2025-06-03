import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "As a small business owner, I was initially overwhelmed by the idea of managing our Amazon presence. Partnering with Primemate was a game-changer for us. They developed a tailored strategy that not only increased our sales but also significantly improved our brand visibility.",
      author: "Sarah L.",
      position: "CEO of NuHealth",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      text: "What I appreciate most is their transparency and dedication to our success. They're always available to answer questions and provide updates. We've seen a 300% increase in sales since working with them. I couldn't be happier with the results.",
      author: "John Lynn",
      position: "Founder of EcoGoods",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 5
    },
    {
      text: "The team at Primemate has been instrumental in scaling our Amazon business. Their deep understanding of the platform and strategic approach to optimization has helped us achieve consistent growth month over month.",
      author: "Michael Chen",
      position: "Director of E-commerce, TechLife",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5
    },
    {
      text: "We were struggling with maintaining our Buy Box percentage and managing inventory effectively. Primemate's expertise helped us optimize our operations and increase our profitability by 40% in just three months.",
      author: "Rachel Smith",
      position: "Operations Manager, PureWell",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="px-6 md:px-12 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Client Success Stories
            </h2>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4D7CFF]/5 to-transparent rounded-2xl"></div>
            <div className="relative">
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].author}
                  className="w-14 h-14 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex justify-center gap-2 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#4D7CFF] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Ready to scale your<br />Amazon business?
              </h3>
              <p className="text-white/80 text-lg mb-8">
                Get a comprehensive analysis of your Amazon presence and discover untapped growth opportunities.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full bg-white/10 text-white px-6 py-4 rounded-xl border border-white/20 focus:outline-none focus:border-white/40 transition-colors placeholder-white/60"
                />
                <button className="w-full sm:w-auto group bg-white text-[#4D7CFF] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center gap-2">
                  Get A Free Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2940&auto=format&fit=crop"
                alt="Contact Us"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}