import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, Sparkles, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('landscape-design');
  const [message, setMessage] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxury API submission
    setIsSubmitted(true);
  };

  const closeSuccessModal = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setService('landscape-design');
    setMessage('');
  };

  const whatsappNumber = '+971585385005';
  const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Luqman%20Khuhro%20Landscaping!%20I%20would%20like%20to%20arrange%20a%20site%20visit%20at%20my%20villa.`;

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative gradient radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact info and hours (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-sans text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Contact Channels</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let’s Discuss Your Outdoor Space
              </h2>
              <p className="font-sans text-stone-300 text-sm sm:text-base font-light mt-3 leading-relaxed">
                Transforming Outdoors, Enhancing Lifestyles. Reach out directly or fill out the form, and our engineering coordinators will arrange a free on-site spatial measurement.
              </p>
            </div>

            {/* Quick Contact Info blocks */}
            <div className="space-y-5">
              <a
                href={`tel:${whatsappNumber}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-stone-850 border border-stone-800 hover:border-emerald-800/30 transition group"
              >
                <div className="p-3 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-900">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-bold">
                    Primary Hotline / Call
                  </span>
                  <span className="block text-white font-serif font-bold text-base mt-1 group-hover:text-emerald-300 transition">
                    +971 585385005
                  </span>
                </div>
              </a>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-stone-850 border border-stone-800 hover:border-emerald-800/30 transition group"
              >
                <div className="p-3 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-900">
                  <MessageSquare className="w-5 h-5 fill-emerald-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-bold">
                    WhatsApp Support Direct
                  </span>
                  <span className="block text-white font-serif font-bold text-base mt-1 group-hover:text-emerald-300 transition">
                    Inquire on WhatsApp
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-850 border border-stone-800">
                <div className="p-3 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-900">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-bold">
                    Service Area Coverage
                  </span>
                  <span className="block text-white font-serif font-bold text-base mt-1">
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-850 border border-stone-800">
                <div className="p-3 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-900">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-stone-400 uppercase tracking-widest font-sans font-bold">
                    Operational Hours
                  </span>
                  <span className="block text-white font-serif font-bold text-sm mt-1">
                    Daily: 8:00 AM - 8:00 PM (GST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-stone-850 border border-stone-800 p-8 rounded-3xl relative">
            <h3 className="font-serif font-bold text-lg text-white mb-6">
              Request Your Free Site Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salim Al Maktoum"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. salim@example.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                    Villa Community Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arabian Ranches III"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                  Core Service Desired
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition appearance-none"
                >
                  <option value="landscape-design">Full Landscape Design & Installation</option>
                  <option value="artificial-grass">Premium Artificial Grass Installation</option>
                  <option value="irrigation-system">Smart Irrigation & Water Systems</option>
                  <option value="multi-item">Turnkey Package (Combined Services)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-stone-400 font-sans uppercase tracking-wider mb-1.5 font-bold">
                  Brief Project Requirements (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your garden vision, yard size, or any special installations you want (e.g., custom wooden pergola or tropical plants)."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-sans text-xs font-bold tracking-wider uppercase rounded-xl transition shadow-lg hover:shadow-emerald-950/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Site Visit Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL DIALOG OVERLAY */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
          <div className="bg-white text-stone-900 rounded-3xl p-8 max-w-md w-full border border-stone-100 shadow-2xl text-center space-y-5 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl text-stone-950">
                Site Booking Received
              </h3>
              <p className="font-sans text-stone-600 text-xs sm:text-sm font-light mt-2 leading-relaxed">
                Thank you for choosing **Luqman Khuhro Landscaping**! Our lead engineering coordinator is reviewing your villa details and will contact you directly on **{phone || 'your phone number'}** in under 2 hours via WhatsApp or call to schedule the visit.
              </p>
            </div>

            <button
              onClick={closeSuccessModal}
              className="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-xl transition shadow cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
