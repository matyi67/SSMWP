import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  TrendingUp, 
  BarChart3, 
  Users, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('growth');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    hero: false,
    services: false,
    features: false,
    testimonials: false,
    pricing: false,
    cta: false
  });

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // For navbar background
      setIsScrolled(window.scrollY > 10);
      
      // For section animations
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id') || '';
        if (sectionTop < window.innerHeight * 0.75) {
          setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-7 w-7" />
            <span>Pulse</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
            <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-primary-600 transition-colors">Pricing</a>
            <a href="#contact" className="btn btn-primary">Get Started</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="py-2 hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#features" 
              className="py-2 hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="py-2 hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="py-2 hover:text-primary-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section 
          id="hero" 
          className={`min-h-screen flex items-center pt-20 transition-opacity duration-1000 ${
            visibleSections.hero ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Elevate Your <span className="text-primary-600">Social Media</span> Presence
              </h1>
              <p className="text-lg text-primary-600 max-w-lg">
                Strategic management, engaging content, and data-driven growth for your brand's social media channels.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact" className="btn btn-primary">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#services" className="btn btn-outline">
                  Learn More
                </a>
              </div>
              <div className="flex items-center gap-6 pt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://images.unsplash.com/photo-151${i}000000-abc123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120&q=80`}
                      alt="Client"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-primary-600">
                  <span className="font-semibold">500+</span> satisfied clients
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card p-4 animate-float-slow">
                    <Instagram className="h-8 w-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold">Instagram Growth</h3>
                    <p className="text-sm text-primary-500">+240% engagement</p>
                  </div>
                  <div className="card p-4 animate-float">
                    <Twitter className="h-8 w-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold">Twitter Management</h3>
                    <p className="text-sm text-primary-500">Trending topics</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card p-4 animate-float">
                    <Facebook className="h-8 w-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold">Facebook Ads</h3>
                    <p className="text-sm text-primary-500">3.2x ROAS</p>
                  </div>
                  <div className="card p-4 animate-float-slow">
                    <Linkedin className="h-8 w-8 text-primary-600 mb-2" />
                    <h3 className="font-semibold">LinkedIn Strategy</h3>
                    <p className="text-sm text-primary-500">B2B focused</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/50 to-primary-100/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          id="services" 
          className={`section bg-white transition-transform duration-1000 ${
            visibleSections.services ? 'translate-y-0' : 'translate-y-10'
          }`}
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-primary-600">
                Comprehensive social media solutions tailored to your business goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10" />,
                  title: "Strategy Development",
                  description: "Custom social media strategies aligned with your business objectives and target audience."
                },
                {
                  icon: <Instagram className="h-10 w-10" />,
                  title: "Content Creation",
                  description: "Engaging, on-brand content designed to resonate with your audience and drive engagement."
                },
                {
                  icon: <MessageCircle className="h-10 w-10" />,
                  title: "Community Management",
                  description: "Active engagement with your audience to build relationships and foster loyalty."
                },
                {
                  icon: <TrendingUp className="h-10 w-10" />,
                  title: "Analytics & Reporting",
                  description: "Comprehensive performance tracking and insights to optimize your social media ROI."
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="card p-6 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all"
                >
                  <div className="bg-primary-100 p-4 rounded-full mb-4 text-primary-800">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-primary-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          className={`section transition-opacity duration-1000 ${
            visibleSections.features ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-primary-600">
                Our data-driven approach delivers measurable results for your social media presence
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-white p-4 rounded-lg shadow-md inline-flex mb-6">
                  <div className="flex space-x-2">
                    {['growth', 'engagement', 'conversion'].map((tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 rounded-md transition-colors ${
                          activeTab === tab 
                            ? 'bg-primary-800 text-white' 
                            : 'hover:bg-primary-100'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  {activeTab === 'growth' && (
                    <>
                      <h3 className="text-2xl font-bold">Accelerate Your Growth</h3>
                      <p className="text-primary-600">
                        Our proven strategies have helped businesses increase their follower count by an average of 200% within the first 3 months.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Targeted audience acquisition",
                          "Competitor analysis and benchmarking",
                          "Trend leveraging for maximum visibility",
                          "Cross-platform growth strategies"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {activeTab === 'engagement' && (
                    <>
                      <h3 className="text-2xl font-bold">Boost Engagement Rates</h3>
                      <p className="text-primary-600">
                        Our content strategies drive meaningful interactions, with clients seeing up to 5x higher engagement than industry averages.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Interactive content creation",
                          "Community-building initiatives",
                          "Conversation-starting campaigns",
                          "Responsive community management"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {activeTab === 'conversion' && (
                    <>
                      <h3 className="text-2xl font-bold">Drive Conversions</h3>
                      <p className="text-primary-600">
                        Transform social media followers into customers with our conversion-focused strategies and campaigns.
                      </p>
                      <ul className="space-y-3">
                        {[
                          "Strategic call-to-action placement",
                          "Sales funnel optimization",
                          "Lead generation campaigns",
                          "ROI-focused content strategy"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                    alt="Social Media Dashboard" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/50 to-primary-100/30 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section 
          id="testimonials" 
          className={`section bg-white transition-transform duration-1000 ${
            visibleSections.testimonials ? 'translate-y-0' : 'translate-y-10'
          }`}
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-primary-600">
                Hear from businesses that have transformed their social media presence with our help
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "Bloom Boutique",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
                  quote: "Pulse transformed our social media strategy. Our Instagram following grew by 300% in just 4 months, and our engagement rates have never been higher."
                },
                {
                  name: "Michael Chen",
                  company: "TechNova Solutions",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
                  quote: "As a B2B company, we struggled with social media until we partnered with Pulse. Their LinkedIn strategy has generated 40+ qualified leads per month."
                },
                {
                  name: "Emma Rodriguez",
                  company: "Fitness Revolution",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
                  quote: "The content strategy Pulse developed for us has been game-changing. Our videos now regularly go viral, and we've seen a 200% increase in class sign-ups."
                }
              ].map((testimonial, index) => (
                <div key={index} className="card p-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-primary-700 italic">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-primary-600" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section 
          id="pricing" 
          className={`section transition-opacity duration-1000 ${
            visibleSections.pricing ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-primary-600">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$799",
                  description: "Perfect for small businesses just getting started with social media.",
                  features: [
                    "2 social media platforms",
                    "12 posts per month",
                    "Basic community management",
                    "Monthly performance report",
                    "Email support"
                  ],
                  cta: "Get Started",
                  popular: false
                },
                {
                  name: "Growth",
                  price: "$1,499",
                  description: "Ideal for businesses looking to accelerate their social media presence.",
                  features: [
                    "4 social media platforms",
                    "20 posts per month",
                    "Daily community management",
                    "Weekly performance reports",
                    "Strategy calls twice monthly",
                    "Ad campaign management",
                    "Priority support"
                  ],
                  cta: "Get Started",
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$2,999",
                  description: "Comprehensive solution for established brands seeking dominance.",
                  features: [
                    "All social platforms",
                    "30+ posts per month",
                    "24/7 community management",
                    "Custom reporting dashboard",
                    "Weekly strategy calls",
                    "Advanced ad campaigns",
                    "Dedicated account manager",
                    "Crisis management"
                  ],
                  cta: "Contact Us",
                  popular: false
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`card p-8 relative ${
                    plan.popular 
                      ? 'border-2 border-primary-600 shadow-lg' 
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-primary-600">/month</span>
                  </div>
                  <p className="text-primary-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="#contact" 
                    className={`btn w-full ${
                      plan.popular ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-primary-600">
                Everything you need to know about our social media management services
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to see results?",
                  answer: "While some improvements can be seen within the first month, significant results typically become apparent after 2-3 months of consistent strategy implementation. Social media growth is cumulative, and our approach focuses on sustainable, long-term results rather than quick fixes."
                },
                {
                  question: "Do you handle paid social media advertising?",
                  answer: "Yes, our Growth and Enterprise plans include paid social media advertising management. We handle everything from audience targeting and ad creation to budget optimization and performance tracking to ensure maximum ROI on your ad spend."
                },
                {
                  question: "How do you measure success?",
                  answer: "We track a comprehensive set of metrics tailored to your business goals, including follower growth, engagement rates, website traffic, lead generation, and conversion rates. Our regular reports provide transparent insights into performance and ROI."
                },
                {
                  question: "Can I cancel my subscription at any time?",
                  answer: "Yes, all our plans operate on a month-to-month basis with no long-term contracts required. We simply require a 30-day notice for cancellation to ensure a smooth transition."
                },
                {
                  question: "Who will be managing my social media accounts?",
                  answer: "You'll be assigned a dedicated social media manager with expertise in your industry, supported by our team of content creators, designers, and strategists. For Enterprise clients, a dedicated account manager oversees your entire strategy."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-primary-200 pb-6">
                  <button 
                    className="flex justify-between items-center w-full text-left font-semibold text-lg"
                    onClick={(e) => {
                      const parent = e.currentTarget.parentElement;
                      const answer = parent?.querySelector('div');
                      const icon = e.currentTarget.querySelector('svg');
                      
                      if (answer && icon) {
                        answer.classList.toggle('hidden');
                        icon.classList.toggle('rotate-180');
                      }
                    }}
                  >
                    {faq.question}
                    <ChevronDown className="h-5 w-5 transition-transform" />
                  </button>
                  <div className="hidden mt-4 text-primary-600">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          id="contact" 
          className={`section bg-primary-800 text-white transition-transform duration-1000 ${
            visibleSections.cta ? 'translate-y-0' : 'translate-y-10'
          }`}
        >
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Social Media?</h2>
                  <p className="mb-6 text-primary-200">
                    Schedule a free consultation with our team to discuss your social media goals and how we can help you achieve them.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="btn bg-white text-primary-800 hover:bg-primary-100">
                      Schedule a Call
                    </a>
                    <a href="#" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-800">
                      View Case Studies
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-primary-800">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1">
                        Company
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Tell us about your social media goals..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full btn bg-primary-800 text-white hover:bg-primary-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="#" className="text-2xl font-bold flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6" />
                <span>Pulse</span>
              </a>
              <p className="text-primary-300 mb-6">
                Strategic social media management for businesses that want to stand out.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="bg-primary-800 p-2 rounded-full hover:bg-primary-700 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Strategy Development",
                  "Content Creation",
                  "Community Management",
                  "Paid Advertising",
                  "Analytics & Reporting"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-primary-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Case Studies",
                  "Testimonials",
                  "Careers",
                  "Blog"
                ].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-primary-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-300">
                <li>hello@pulsesocial.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Social Ave, Suite 101<br />San Francisco, CA 94103</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">
              © {new Date().getFullYear()} Pulse Social Media Management. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-primary-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-primary-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;