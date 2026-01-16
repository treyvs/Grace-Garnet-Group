import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { useForm } from 'react-hook-form';
import './App.css';

const GraceGarnetWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="website">
      <Navigation 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        navigateTo={navigateTo}
        currentPage={currentPage}
      />
      
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'hr-consulting' && <HRConsultingPage />}
      {currentPage === 'foundation' && <FoundationPage />}
      {currentPage === 'corporate-training' && <CorporateTrainingPage />}
      {currentPage === 'coaching' && <CoachingPage />}
      {currentPage === 'mediation' && <MediationPage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

// Navigation Component
const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen, navigateTo, currentPage }) => (
  <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
    <div className="container navbar-content">
      <div className="navbar-brand" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
        <img src="android-chrome-192x192.png" alt="Grace Garnet Group Logo" className="logo-image" />
        <div className="brand-text">
          <h1 className="brand-title">GRACE GARNET GROUP</h1>
          <p className="brand-subtitle">Excellence in Every Endeavor</p>
        </div>
      </div>
      
      <div className="navbar-links">
        <span onClick={() => navigateTo('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</span>
        <span onClick={() => navigateTo('about')} className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>About</span>
        <div className="nav-dropdown">
          <span className="nav-link">Services ▾</span>
          <div className="dropdown-content">
            <span onClick={() => navigateTo('hr-consulting')}>HR Consulting</span>
            <span onClick={() => navigateTo('foundation')}>Foundation</span>
            <span onClick={() => navigateTo('corporate-training')}>Corporate Training</span>
            <span onClick={() => navigateTo('coaching')}>Coaching & Mentorship</span>
            <span onClick={() => navigateTo('mediation')}>Mediation</span>
          </div>
        </div>
        <span onClick={() => navigateTo('contact')} className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</span>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-toggle">
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </div>

    {isMenuOpen && (
      <div className="mobile-menu">
        <span onClick={() => navigateTo('home')} className="mobile-link">Home</span>
        <span onClick={() => navigateTo('about')} className="mobile-link">About</span>
        <span onClick={() => navigateTo('hr-consulting')} className="mobile-link">HR Consulting</span>
        <span onClick={() => navigateTo('foundation')} className="mobile-link">Foundation</span>
        <span onClick={() => navigateTo('corporate-training')} className="mobile-link">Corporate Training</span>
        <span onClick={() => navigateTo('coaching')} className="mobile-link">Coaching & Mentorship</span>
        <span onClick={() => navigateTo('mediation')} className="mobile-link">Mediation</span>
        <span onClick={() => navigateTo('contact')} className="mobile-link">Contact</span>
      </div>
    )}
  </nav>
);

// Home Page
const HomePage = ({ navigateTo }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    { name: 'Saraphine Nthenge', text: 'Grace Garnet Group transformed my CV, and I landed my dream job within weeks!', role: 'Marketing Executive' },
    { name: 'James Mwaniki', text: 'Their LinkedIn coaching was a game changer. My profile now attracts recruiters daily!', role: 'Software Engineer' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { 
      id: 'hr-consulting', 
      name: 'HR Consulting', 
      icon: '👥', 
      color: 'red',
      description: 'Professional CV writing, LinkedIn optimization, and career coaching services',
      image: null // No image provided yet
    },
    { 
      id: 'foundation', 
      name: 'Foundation', 
      icon: '❤️', 
      color: 'pink',
      description: 'Charitable initiatives supporting communities and fostering positive change',
      image: '/images/foundation-volunteers.png'
    },
    { 
      id: 'corporate-training', 
      name: 'Corporate Training', 
      icon: '📚', 
      color: 'blue',
      description: 'Customized training programs that empower organizational growth',
      image: '/images/corporate-training.png'
    },
    { 
      id: 'coaching', 
      name: 'Coaching & Mentorship', 
      icon: '🎯', 
      color: 'green',
      description: 'Personalized guidance to unlock your potential and achieve goals',
      image: null // No image provided yet
    },
    { 
      id: 'mediation', 
      name: 'Mediation', 
      icon: '⚖️', 
      color: 'indigo',
      description: 'Professional conflict resolution for lasting solutions',
      image: '/images/mediation.png'
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="hero-section-enhanced">
        <div className="hero-image-background">
          <img src="/images/homepage-hero.jpg" alt="Grace Garnet Group Team" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content-overlay">
          <div className="hero-badge-enhanced">
            <span className="badge-icon">🏆</span>
            <span>East Africa's Premier Professional Services Provider</span>
          </div>
          <h1 className="hero-title-enhanced animate-fade-in">
            Empowering Excellence<br />
            Across Every Dimension
          </h1>
          <p className="hero-description-enhanced animate-fade-in-delay">
            We are a multi-disciplinary consultancy dedicated to transforming careers, organizations, and communities through expert guidance and unwavering commitment to excellence.
          </p>
          <div className="hero-buttons animate-fade-in-delay-2">
            <button onClick={() => navigateTo('contact')} className="btn btn-hero-primary">
              Get Started Today <span className="btn-arrow">→</span>
            </button>
            <button onClick={() => navigateTo('about')} className="btn btn-hero-secondary">
              Learn More About Us
            </button>
          </div>
          
          <div className="stats-grid-enhanced">
            {[
              { icon: '🎯', number: '6', label: 'Service Divisions' },
              { icon: '👥', number: '500+', label: 'Clients Served' },
              { icon: '⭐', number: '99%', label: 'Satisfaction Rate' },
              { icon: '🏆', number: '10+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card-enhanced">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number-enhanced">{stat.number}</div>
                <div className="stat-label-enhanced">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="services-showcase-enhanced">
        <div className="container">
          <div className="section-header-new">
            <span className="section-badge">Our Expertise</span>
            <h2 className="section-title-new">Comprehensive Solutions for Every Need</h2>
            <p className="section-description-new">
              Five specialized divisions working in harmony to deliver exceptional results
            </p>
          </div>

          <div className="services-grid-enhanced">
            {services.map((service, idx) => (
              <div 
                key={service.id} 
                className={`service-card-enhanced service-card-${service.color}`}
                onClick={() => navigateTo(service.id)}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {service.image ? (
                  <div className="service-card-image">
                    <img src={service.image} alt={service.name} />
                    <div className="service-card-overlay">
                      <div className="service-icon-enhanced">{service.icon}</div>
                      <h3 className="service-name-enhanced">{service.name}</h3>
                    </div>
                  </div>
                ) : (
                  <div className={`service-card-no-image service-bg-${service.color}`}>
                    <div className="service-icon-enhanced">{service.icon}</div>
                    <h3 className="service-name-enhanced">{service.name}</h3>
                  </div>
                )}
                <div className="service-card-content-enhanced">
                  <p className="service-desc-enhanced">{service.description}</p>
                  <div className="service-link-enhanced">
                    Explore Service <span className="arrow-icon">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep your existing testimonials and CTA sections */}
      <section className="testimonials-carousel-section">
        <div className="container">
          <div className="section-header-new">
            <span className="section-badge">Client Stories</span>
            <h2 className="section-title-new">What Our Clients Say</h2>
          </div>

          <div className="testimonial-carousel">
            <div className="testimonial-slide">
              <div className="testimonial-quote-new">"</div>
              <p className="testimonial-text-new">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-author-new">
                <div className="author-avatar">{testimonials[activeTestimonial].name.charAt(0)}</div>
                <div>
                  <p className="author-name-new">{testimonials[activeTestimonial].name}</p>
                  <p className="author-role">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(idx)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Future?</h2>
            <p className="cta-description">
              Join hundreds of satisfied clients who have achieved their goals with Grace Garnet Group
            </p>
            <button onClick={() => navigateTo('contact')} className="btn btn-cta">
              Schedule a Consultation <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// About Page
const AboutPage = () => (
  <div className="page-content">
    <section className="page-hero">
      <div className="container">
        <h1 className="page-title">About Grace Garnet Group</h1>
        <p className="page-subtitle">Transforming Lives, Organizations, and Communities Since 2014</p>
      </div>
    </section>

    <section className="content-section">
      <div className="container">
        <div className="content-grid">
          <div>
            <h2 className="content-title">Our Story</h2>
            <p className="content-paragraph">
              Founded in 2014, Grace Garnet Group Ltd emerged from a vision to create a comprehensive professional services firm that addresses the multifaceted needs of individuals and organizations in East Africa.
            </p>
            <p className="content-paragraph">
              What began as a specialized HR consultancy has evolved into a diversified group, each division excelling in its domain while working synergistically to deliver integrated solutions.
            </p>
          </div>
          <div className="milestone-grid">
            <div className="milestone-card"><div className="milestone-year">2014</div><p>Founded</p></div>
            <div className="milestone-card"><div className="milestone-year">500+</div><p>Clients</p></div>
            <div className="milestone-card"><div className="milestone-year">6</div><p>Divisions</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mvv-section">
      <div className="container">
        <div className="mvv-grid">
          <div className="mvv-card">
            <div className="mvv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower individuals and organizations through expert guidance, innovative solutions, and unwavering commitment to excellence.</p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>To be East Africa's leading integrated professional services provider, recognized for transforming careers, organizations, and communities.</p>
          </div>
          <div className="mvv-card">
            <div className="mvv-icon">💎</div>
            <h3>Our Values</h3>
            <p>Excellence, Integrity, Innovation, Client-Focus, and Collaboration drive everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Service Pages (reusable component)
// UPDATED Service Page Template with Images
const ServicePageTemplate = ({ title, icon, description, features, imagePath, imageAlt }) =>
  (
  <div className="page-content">
    <section className="page-hero">
      <div className="container">
        <div className="service-hero-icon">{icon}</div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{description}</p>
      </div>
    </section>

    {/* NEW: Hero Image Section */}
    {imagePath && (
      <section className="service-image-section">
        <div className="container">
          <div className="service-image-container">
            <img src={imagePath} alt={imageAlt} className="service-hero-image" />
          </div>
        </div>
      </section>
    )}

    <section className="content-section">
      <div className="container">
        <h2 className="content-title">What We Offer</h2>
        <div className="features-grid-page">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card-page">
              <div className="feature-icon-page">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// UPDATED Service Pages with Images
const FoundationPage = () => (
  <ServicePageTemplate
    title="Grace Garnet Foundation"
    icon="❤️"
    description="Creating lasting positive change through education, skills development, and social impact programs."
    imagePath="/images/foundation-volunteers.png"
    imageAlt="Foundation volunteers helping community"
    features={[
      { icon: '🎓', title: 'Educational Support', description: 'Scholarships and mentorship for underprivileged youth' },
      { icon: '👷', title: 'Skills Development', description: 'Vocational training programs that create opportunities' },
      { icon: '🤝', title: 'Community Outreach', description: 'Grassroots initiatives addressing local needs' },
      { icon: '💪', title: 'Youth Empowerment', description: 'Leadership and entrepreneurship programs' }
    ]}
  />
);

const CorporateTrainingPage = () => (
  <ServicePageTemplate
    title="Corporate Training & Development"
    icon="📚"
    description="Empower your organization with customized training programs that drive real results."
    imagePath="/images/corporate-training.png"
    imageAlt="Corporate training session in progress"
    features={[
      { icon: '👔', title: 'Leadership Development', description: 'Build effective leaders who inspire teams' },
      { icon: '🤝', title: 'Team Building', description: 'Strengthen team dynamics and collaboration' },
      { icon: '📊', title: 'Skills Training', description: 'Technical and soft skills development' },
      { icon: '🎯', title: 'Performance Management', description: 'Drive organizational excellence' }
    ]}
  />
);

const MediationPage = () => (
  <ServicePageTemplate
    title="Mediation Services"
    icon="⚖️"
    description="Professional conflict resolution for lasting solutions and restored relationships."
    imagePath="/images/mediation.png"
    imageAlt="Professional mediation session"
    features={[
      { icon: '🏢', title: 'Workplace Mediation', description: 'Resolve workplace conflicts professionally' },
      { icon: '💼', title: 'Commercial Disputes', description: 'Business dispute resolution services' },
      { icon: '👨‍👩‍👧', title: 'Family Mediation', description: 'Compassionate family conflict resolution' },
      { icon: '🤝', title: 'Conflict Resolution Training', description: 'Build conflict resolution skills in your team' }
    ]}
  />
);

// Keep HRConsultingPage and CoachingPage as they were
const HRConsultingPage = () => (
  <ServicePageTemplate
    title="HR Consulting & Career Services"
    icon="👥"
    description="Elevate your career with professional CV writing, LinkedIn optimization, and career coaching."
    features={[
      { icon: '📄', title: 'Professional CV Writing', description: 'ATS-optimized CVs that showcase your unique value' },
      { icon: '💼', title: 'LinkedIn Optimization', description: 'Transform your profile into a powerful personal brand' },
      { icon: '🎤', title: 'Interview Coaching', description: 'Master interviews with personalized coaching' },
      { icon: '🗺️', title: 'Career Counseling', description: 'Navigate career transitions with expert guidance' }
    ]}
  />
);

const CoachingPage = () => (
  <ServicePageTemplate
    title="Coaching & Mentorship"
    icon="🎯"
    description="Personalized guidance to unlock your potential and achieve your goals."
    features={[
      { icon: '💼', title: 'Executive Coaching', description: 'Leadership coaching for executives' },
      { icon: '🗺️', title: 'Career Mentorship', description: 'Strategic career guidance' },
      { icon: '🌱', title: 'Personal Development', description: 'Holistic growth programs' },
      { icon: '🎯', title: 'Goal Achievement', description: 'Structured goal-setting support' }
    ]}
  />
);

// Contact Page with Firebase Form
const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        ...data,
        timestamp: serverTimestamp(),
        status: 'new'
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been received. We\'ll contact you within 24 hours.'
      });
      reset();
      
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try emailing us directly at gracegarnetgroup@gmail.com'
      });
    }
  };

  return (
    <div className="page-content">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's discuss how we can help you achieve your goals</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid-page">
            <div className="contact-info-box">
              <h3>Contact Information</h3>
              <div className="contact-item-page">
                <span className="contact-icon-page">✉️</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:gracegarnetgroup@gmail.com">gracegarnetgroup@gmail.com</a>
                </div>
              </div>
              <div className="contact-item-page">
                <span className="contact-icon-page">📞</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+254715433967">+254 715 433 967</a>
                </div>
              </div>
              <div className="contact-item-page">
                <span className="contact-icon-page">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Nairobi (Along Ngong Road), Kenya</p>
                </div>
              </div>
            </div>

            <div className="contact-form-box">
              <h3>Send Us a Message</h3>
              
              {submitStatus.message && (
                <div className={`alert alert-${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    {...register('name', { required: 'Name is required' })} 
                    type="text"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })} 
                    type="email"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    {...register('phone', { required: 'Phone number is required' })} 
                    type="tel"
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && <span className="error">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label>Service of Interest *</label>
                  <select {...register('service', { required: 'Please select a service' })}>
                    <option value="">Select a service</option>
                    <option value="HR Consulting">HR Consulting & Career Services</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Corporate Training">Corporate Training</option>
                    <option value="Coaching">Coaching & Mentorship</option>
                    <option value="Mediation">Mediation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.service && <span className="error">{errors.service.message}</span>}
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    {...register('message', { required: 'Message is required' })} 
                    rows="5"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                  {errors.message && <span className="error">{errors.message.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary-new btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = ({ navigateTo }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3 className="footer-title">GRACE GARNET GROUP LTD</h3>
          <p className="footer-description">Your trusted partner for comprehensive professional services.</p>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><span onClick={() => navigateTo('home')} className="footer-link">Home</span></li>
            <li><span onClick={() => navigateTo('about')} className="footer-link">About</span></li>
            <li><span onClick={() => navigateTo('contact')} className="footer-link">Contact</span></li>
          </ul>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            <li><span onClick={() => navigateTo('hr-consulting')} className="footer-link">HR Consulting</span></li>
            <li><span onClick={() => navigateTo('foundation')} className="footer-link">Foundation</span></li>
            <li><span onClick={() => navigateTo('corporate-training')} className="footer-link">Corporate Training</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Grace Garnet Group Ltd. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default GraceGarnetWebsite;