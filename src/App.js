import React, { useState, useEffect, useRef } from 'react';
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
  }, [testimonials.length]);

  const services = [
    { 
      id: 'hr-consulting', 
      name: 'HR Consulting', 
      color: 'red',
      description: 'Professional CV writing, LinkedIn optimization, and career coaching services',
      image: '/images/hr-consulting.png'
    },
    { 
      id: 'foundation', 
      name: 'Foundation', 
      color: 'pink',
      description: 'Charitable initiatives supporting communities and fostering positive change',
      image: '/images/foundation-volunteers.png'
    },
    { 
      id: 'corporate-training', 
      name: 'Corporate Training', 
      color: 'blue',
      description: 'Customized training programs that empower organizational growth',
      image: '/images/corporate-training.png'
    },
    { 
      id: 'coaching', 
      name: 'Coaching & Mentorship',  
      color: 'green',
      description: 'Personalized guidance to unlock your potential and achieve goals',
      image: '/images/coaching and mentoring.png'
    },
    { 
      id: 'mediation', 
      name: 'Mediation', 
      color: 'indigo',
      description: 'Professional conflict resolution for lasting solutions',
      image: '/images/mediation.png'
    }
  ];

  return (
    <>
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
              {number: '5', label: 'Service Divisions' },
              {number: '500+', label: 'Clients Served' },
              {number: '99%', label: 'Satisfaction Rate' },
              {number: '10+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card-enhanced">
                <div className="stat-number-enhanced">{stat.number}</div>
                <div className="stat-label-enhanced">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      <h3 className="service-name-enhanced">{service.name}</h3>
                    </div>
                  </div>
                ) : (
                  <div className={`service-card-no-image service-bg-${service.color}`}>
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
            <div className="milestone-card"><div className="milestone-year">5</div><p>Divisions</p></div>
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

// ENHANCED Service Page Template with Scroll Fade Effect
const ServicePageTemplate = ({ title, icon, description, features, imagePath, imageAlt }) => {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      // Calculate opacity: fades out completely by 60% of hero scroll
      const fadePoint = heroHeight * 0.6;
      const newOpacity = Math.max(0, 1 - (scrollPosition / fadePoint));
      
      setFadeOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-content">
      {/* Enhanced Hero with Scroll-Driven Fade */}
      <div 
        ref={heroRef}
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'white' // Fallback
        }}
      >
        {/* Background Image Layer */}
        {imagePath && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: fadeOpacity,
              transition: 'opacity 0.05s ease-out',
              zIndex: 0,
              willChange: 'opacity'
            }}
          />
        )}
        
        {/* Gradient Overlay Layer */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(127, 29, 29, 0.88) 0%, rgba(220, 38, 38, 0.82) 100%)',
            opacity: fadeOpacity,
            transition: 'opacity 0.05s ease-out',
            zIndex: 1,
            willChange: 'opacity'
          }}
        />
        
        {/* Content Layer */}
        <div 
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
            padding: '140px 20px 80px'
          }}
        >
          {icon && (
            <div style={{ 
              fontSize: '80px', 
              marginBottom: '24px',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
            }}>
              {icon}
            </div>
          )}
          <h1 style={{ 
            fontSize: 'clamp(32px, 5vw, 56px)', 
            fontWeight: '800', 
            marginBottom: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            lineHeight: '1.2'
          }}>
            {title}
          </h1>
          <p style={{ 
            fontSize: 'clamp(16px, 2vw, 22px)', 
            maxWidth: '700px', 
            margin: '0 auto',
            opacity: 0.95,
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
            lineHeight: '1.7'
          }}>
            {description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="content-section">
        <div className="container">
          <h2 className="content-title text-center">What We Offer</h2>
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
};

// UPDATED Service Pages with Enhanced Professional Content
const HRConsultingPage = () => (
  <ServicePageTemplate
    title="HR Consulting & Career Services"
    description="Elevate your career with expert guidance from certified professionals. Our comprehensive suite of career services is designed to position you as the ideal candidate in today's competitive job market."
    imagePath="/images/hr-consulting.png"
    imageAlt="Professional HR consulting session"
    features={[
      { 
        icon: '📄', 
        title: 'Professional CV Writing', 
        description: 'Transform your career narrative with ATS-optimized CVs crafted by industry experts. We highlight your unique value proposition, quantify achievements, and ensure your resume passes automated screening systems while captivating hiring managers with compelling storytelling.'
      },
      { 
        icon: '💼', 
        title: 'LinkedIn Optimization', 
        description: 'Build a powerful personal brand that attracts opportunities. Our specialists optimize every section of your profile—from headline to recommendations—ensuring maximum visibility to recruiters and establishing you as a thought leader in your field through strategic content positioning.'
      },
      { 
        icon: '🎤', 
        title: 'Interview Coaching', 
        description: 'Master the art of interviewing with personalized coaching sessions. Learn proven techniques for behavioral interviews, competency-based questions, and salary negotiations. Practice with mock interviews and receive actionable feedback to boost your confidence and conversion rate.'
      },
      { 
        icon: '🗺️', 
        title: 'Career Strategy Consulting', 
        description: 'Navigate complex career transitions with strategic guidance tailored to your aspirations. Whether pivoting industries, advancing to leadership, or re-entering the workforce, our consultants provide comprehensive roadmaps, market insights, and actionable steps for sustainable career success.'
      }
    ]}
  />
);

const FoundationPage = () => (
  <ServicePageTemplate
    title="Grace Garnet Foundation"
    description="Creating lasting positive change through strategic community investment. We believe in empowering individuals and communities through education, skills development, and sustainable social impact programs that create ripple effects of transformation."
    imagePath="/images/foundation-volunteers.png"
    imageAlt="Foundation volunteers helping community"
    features={[
      { 
        icon: '🎓', 
        title: 'Educational Empowerment', 
        description: 'Providing comprehensive scholarship programs and academic mentorship for underprivileged youth. We cover tuition, learning materials, and ongoing support to ensure students not only access quality education but thrive academically and develop into future community leaders and change-makers.'
      },
      { 
        icon: '👷', 
        title: 'Skills Development Programs', 
        description: 'Bridging the employment gap through market-driven vocational training. Our partnerships with industry leaders ensure participants gain in-demand skills, hands-on practical experience, and recognized certification in trades ranging from technology to hospitality, opening doors to sustainable livelihoods and economic independence.'
      },
      { 
        icon: '🤝', 
        title: 'Community Outreach Initiatives', 
        description: 'Implementing grassroots programs that address immediate community needs while building long-term resilience. From health awareness campaigns to infrastructure development, we work alongside communities to co-create solutions that are culturally appropriate, sustainable, and genuinely transformative.'
      },
      { 
        icon: '💪', 
        title: 'Youth Leadership Development', 
        description: 'Cultivating the next generation of change-makers through comprehensive leadership and entrepreneurship training. Our programs combine mentorship, business skills, character development, and networking opportunities to help young people become effective catalysts for positive change in their communities and beyond.'
      }
    ]}
  />
);

const CorporateTrainingPage = () => (
  <ServicePageTemplate
    title="Corporate Training & Development"
    description="Transform your organization's capabilities through cutting-edge, customized training solutions. Our evidence-based programs blend global best practices with local context to drive measurable improvements in performance, engagement, and organizational culture."
    imagePath="/images/corporate-training.png"
    imageAlt="Corporate training session in progress"
    features={[
      { 
        icon: '👔', 
        title: 'Leadership Excellence Programs', 
        description: 'Develop transformational leaders who inspire teams and drive results. Our comprehensive curriculum covers emotional intelligence, strategic thinking, change management, and inclusive leadership—equipping executives and emerging leaders with essential tools to navigate complexity and foster high-performing, engaged organizational cultures.'
      },
      { 
        icon: '🤝', 
        title: 'Team Dynamics & Collaboration', 
        description: 'Strengthen organizational cohesion through experiential team-building interventions. Using proven frameworks like Belbin Team Roles and Five Dysfunctions, we diagnose team challenges and facilitate engaging workshops that improve communication, build trust, enhance accountability, and develop collective problem-solving capabilities.'
      },
      { 
        icon: '📊', 
        title: 'Technical & Soft Skills Training', 
        description: 'Close critical skill gaps with tailored training in both technical competencies and essential soft skills. From data analytics and project management to communication and conflict resolution, our modular programs are customized to your industry needs and delivered through engaging, interactive, and practical methodologies.'
      },
      { 
        icon: '🎯', 
        title: 'Performance Management Systems', 
        description: 'Implement robust performance frameworks that align individual goals with organizational strategy. We design comprehensive OKR systems, competency models, and feedback cultures that drive continuous improvement, recognize and reward excellence, and create clear pathways for professional development and career advancement.'
      }
    ]}
  />
);

const CoachingPage = () => (
  <ServicePageTemplate
    title="Coaching & Mentorship"
    description="Unlock your full potential through personalized, transformational coaching. Our certified coaches partner with you on a journey of self-discovery, goal achievement, and sustainable growth—whether you're a C-suite executive, mid-career professional, or emerging talent."
    imagePath="/images/coaching and mentoring.png"
    imageAlt="One-on-one coaching session"
    features={[
      { 
        icon: '💼', 
        title: 'Executive Leadership Coaching', 
        description: 'Elevate your leadership impact with confidential one-on-one coaching designed for senior executives. Address complex strategic challenges, refine decision-making frameworks, enhance executive presence, and develop authentic leadership styles that inspire trust, drive organizational transformation, and deliver sustainable business results.'
      },
      { 
        icon: '🗺️', 
        title: 'Career Advancement Mentorship', 
        description: 'Accelerate your professional trajectory with strategic mentorship from seasoned industry professionals. Gain invaluable insider perspectives on career pivots, build influential networks, develop organizational savvy for effective navigation, and create actionable, personalized plans for reaching your next significant career milestone.'
      },
      { 
        icon: '🌱', 
        title: 'Holistic Personal Development', 
        description: 'Achieve balance and fulfillment across all life dimensions. Our integrative coaching addresses career aspirations alongside health, relationships, and purpose—using evidence-based tools from positive psychology, mindfulness, and behavioral science to create lasting, holistic transformation that honors your complete self.'
      },
      { 
        icon: '🎯', 
        title: 'Goal Achievement & Accountability', 
        description: 'Turn ambitious goals into reality through structured coaching partnerships. We help you clarify vision, break down objectives into actionable steps, identify and overcome obstacles, leverage core strengths, and maintain consistent momentum through regular accountability check-ins—ensuring you achieve what matters most to you.'
      }
    ]}
  />
);

const MediationPage = () => (
  <ServicePageTemplate
    title="Professional Mediation Services"
    icon="⚖️"
    description="Resolve conflicts constructively and restore productive relationships through expert, impartial mediation. Our accredited mediators facilitate structured dialogue that transforms disputes into opportunities for mutual understanding, creative solutions, and sustainable agreements."
    imagePath="/images/mediation.png"
    imageAlt="Professional mediation session"
    features={[
      { 
        icon: '🏢', 
        title: 'Workplace Conflict Resolution', 
        description: 'Restore workplace harmony and productivity through confidential, professional mediation. We address interpersonal disputes, team conflicts, and organizational tensions with proven techniques that preserve valuable relationships, rebuild trust, and create sustainable frameworks for constructive collaboration moving forward.'
      },
      { 
        icon: '💼', 
        title: 'Commercial Dispute Mediation', 
        description: 'Protect business relationships and avoid costly litigation through facilitated negotiation. Our mediators, with deep commercial acumen and industry experience, help parties in contract disputes, partnership disagreements, and vendor conflicts find pragmatic, mutually beneficial solutions that preserve valuable business relationships and partnerships.'
      },
      { 
        icon: '👨‍👩‍👧', 
        title: 'Family & Interpersonal Mediation', 
        description: 'Navigate sensitive family matters with compassion, dignity, and professionalism. From inheritance disputes to co-parenting arrangements, we create safe, structured spaces for difficult conversations, helping families reach fair agreements that prioritize long-term relationships and the wellbeing of all involved, especially children.'
      },
      { 
        icon: '🤝', 
        title: 'Conflict Resolution Training', 
        description: 'Build organizational capacity to prevent and manage conflicts internally. Our comprehensive training equips managers and HR professionals with practical mediation skills, conflict analysis frameworks, and communication techniques—creating a proactive culture where differences are addressed constructively before escalating into major issues.'
      }
    ]}
  />
);

// Contact Page
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

            <div className="contact-form-page" onSubmit={handleSubmit(onSubmit)}>
              {submitStatus.message && (
                <div className={`alert ${submitStatus.type}`}>
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
        <p>&copy; 2025 Grace Garnet Group Ltd. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default GraceGarnetWebsite;