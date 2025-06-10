import React from 'react';
import { CheckCircle, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ThankYouPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your strategy session has been successfully scheduled. We're excited to help you scale your Amazon business!
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#4D7CFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Check Your Email
                  </h3>
                  <p className="text-gray-600">
                    We've sent you a confirmation email with all the details for your upcoming call. Please review it carefully and let us know if you have any questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4D7CFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#4D7CFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Prepare for Success
                  </h3>
                  <p className="text-gray-600">
                    Come prepared with your Amazon seller account details and any specific challenges you're facing. This will help us provide the most valuable insights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#4D7CFF] rounded-3xl p-8 md:p-12 text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              What to Expect on Your Call
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Account Analysis</h4>
                <p className="text-white/80 text-sm">
                  We'll review your current Amazon performance and identify opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Custom Strategy</h4>
                <p className="text-white/80 text-sm">
                  Get a tailored growth plan specific to your brand and goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Next Steps</h4>
                <p className="text-white/80 text-sm">
                  Learn how we can help implement your growth strategy
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Have questions before your call? Feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#4D7CFF] px-6 py-3 rounded-xl font-medium border border-[#4D7CFF] hover:bg-[#4D7CFF] hover:text-white transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#4D7CFF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#3D6CFF] transition-all duration-300"
              >
                Back to Home
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}