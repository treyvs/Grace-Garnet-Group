import React, { useState, useEffect } from 'react';
import './App.css';

const GraceGarnetWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subsidiaries = [
    {
      id: 'hr',
      name: 'HR Consulting',
      icon: '👥',
      color: 'red',
      description: 'Professional CV writing, LinkedIn optimization, and career coaching',
      services: ['CV Writing & Optimization', 'LinkedIn Profile Enhancement', 'Interview Coaching', 'Career Counseling'],
      stats: { number: '100+', label: 'CVs Revamped' }
    },
    {
      id: 'foundation',
      name: 'Foundation',
      icon: '❤️',
      color: 'pink',
      description: 'Charitable initiatives supporting communities and fostering positive change',
      services: ['Community Outreach', 'Educational Support', 'Skills Development', 'Social Impact Programs'],
      stats: { number: '10+', label: 'Communities Served' }
    },
    {
      id: 'interior',
      name: 'Interior Design',
      icon: '🎨',
      color: 'purple',
      description: 'Creating inspiring spaces that reflect your vision and enhance functionality',
      services: ['Residential Design', 'Commercial Spaces', 'Space Planning', 'Design Consultation'],
      stats: { number: '10+', label: 'Spaces Transformed' }
    },
    {
      id: 'training',
      name: 'Corporate Training',
      icon: '📚',
      color: 'blue',
      description: 'Empowering organizations through customized training and development programs',
      services: ['Leadership Development', 'Team Building', 'Skills Training', 'Organizational Development'],
      stats: { number: '10+', label: 'Organizations Trained' }
    },
    {
      id: 'coaching',
      name: 'Coaching & Mentorship',
      icon: '🎯',
      color: 'green',
      description: 'Personalized guidance to unlock your potential and achieve your goals',
      services: ['Executive Coaching', 'Career Mentorship', 'Personal Development', 'Goal Setting & Achievement'],
      stats: { number: '100+', label: 'Clients Coached' }
    },
    {
      id: 'mediation',
      name: 'Mediation',
      icon: '⚖️',
      color: 'indigo',
      description: 'Professional conflict resolution and mediation services for lasting solutions',
      services: ['Workplace Mediation', 'Commercial Disputes', 'Family Mediation', 'Conflict Resolution'],
      stats: { number: '10+', label: 'Mediations Conducted' }
    }
  ];

  const testimonials = [
    { name: 'Saraphine Nthenge', text: 'Grace Garnet Group transformed my CV, and I landed my dream job within weeks!', service: 'HR Consulting' },
    { name: 'James Mwaniki', text: 'Their LinkedIn coaching was a game changer. My profile now attracts recruiters daily!', service: 'HR Consulting' },
    { name: 'Patricia Otieno', text: 'The interior design team created a space that truly reflects our brand identity.', service: 'Interior Design' },
  ];

  return (
    <div className="website">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-content">
          <div className="navbar-brand">
  <img
    src='android-chrome-192x192.png'
    alt="Grace Garnet Group Logo"
    className="logo-image"
  />
  <div className="brand-text">
    <h1 className="brand-title">GRACE GARNET GROUP</h1>
    <p className="brand-subtitle">Excellence in Every Endeavor</p>
  </div>
</div>

          
          <div className="navbar-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <h2 className="hero-title">
            Empowering Excellence<br />Across Every Dimension
          </h2>
          <p className="hero-description">
            Grace Garnet Group Ltd is your trusted partner for comprehensive professional services—from HR consulting to interior design, corporate training to charitable impact.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Explore Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          
          {/* Stats Bar */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Service Divisions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-description">
              Grace Garnet Group Ltd is a multi-faceted organization committed to delivering excellence across diverse professional services. Our integrated approach ensures comprehensive solutions for individuals and organizations.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🏆</div>
              <h3 className="about-title">Our Mission</h3>
              <p className="about-text">To empower individuals and organizations through expert guidance, innovative solutions, and unwavering commitment to excellence.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎯</div>
              <h3 className="about-title">Our Vision</h3>
              <p className="about-text">To be the leading integrated service provider, recognized for transforming lives and businesses across multiple sectors.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">❤️</div>
              <h3 className="about-title">Our Values</h3>
              <p className="about-text">Integrity, excellence, innovation, and compassion guide everything we do, ensuring the best outcomes for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Service Divisions</h2>
            <p className="section-description">Six specialized divisions working together to serve you better</p>
          </div>

          <div className="services-grid">
            {subsidiaries.map((sub) => (
              <div key={sub.id} className="service-card">
                <div className={`service-header service-header-${sub.color}`}>
                  <div className="service-icon">{sub.icon}</div>
                  <h3 className="service-title">Grace Garnet {sub.name}</h3>
                  <div className="service-stats">
                    <span className="service-stat-number">{sub.stats.number}</span>
                    <span className="service-stat-label">{sub.stats.label}</span>
                  </div>
                </div>
                <div className="service-body">
                  <p className="service-description">{sub.description}</p>
                  <ul className="service-list">
                    {sub.services.map((service, idx) => (
                      <li key={idx} className="service-item">
                        <span className="service-bullet">▸</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`service-btn service-btn-${sub.color}`}>
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-description">Hear from those we've helped transform their careers and spaces</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-service">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <h2 className="contact-title">Ready to Get Started?</h2>
          <p className="contact-description">Contact us today and let's discuss how we can help you achieve your goals</p>
          
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3 className="contact-method">Email Us</h3>
              <a href="mailto:gracegarnetgroup@gmail.com" className="contact-link">
                gracegarnetgroup@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3 className="contact-method">Call Us</h3>
              <a href="tel:+254715433967" className="contact-link">
                +254 715 433 967
              </a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3 className="contact-method">Visit Us</h3>
              <p className="contact-info">Nairobi, Kenya</p>
            </div>
          </div>

          <a href="mailto:gracegarnetgroup@gmail.com" className="contact-cta">
            Send Us a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-title">GRACE GARNET GROUP LTD</h3>
              <p className="footer-description">Your trusted partner for comprehensive professional services across multiple sectors.</p>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#services" className="footer-link">Services</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            <div className="footer-services">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                {subsidiaries.slice(0, 4).map((sub) => (
                  <li key={sub.id} className="footer-service">{sub.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Grace Garnet Group Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GraceGarnetWebsite;