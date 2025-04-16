import "../../assets/css/Home.css";
import React, { useEffect, useState } from "react";
import attorney1 from "../../assets/image/lawyer1.jpg";
import attorney2 from "../../assets/image/lawyer3.jpg";
import attorney3 from "../../assets/image/istockphoto-104821116-612x612.jpg";
import attorney4 from "../../assets/image/istockphoto-1326920136-612x612.jpg";
import client1 from "../../assets/image/client1.jpg";
import client2 from "../../assets/image/client2.jpg";
import client3 from "../../assets/image/client3.webp";
import { Link } from "react-router-dom";

// Import images (create these files in your assets folder)

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('.home-fade-in, .home-slide-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          el.classList.add('home-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const attorneys = [
    {
      name: 'Alex Jacobson',
      specialty: 'Corporate Lawyer',
      image: attorney1,
      experience: '12 years',
      cases: '240+'
    },
    {
      name: 'Polard Andrew',
      specialty: 'Criminal Lawyer',
      image: attorney2,
      experience: '9 years',
      cases: '180+'
    },
    {
      name: 'John Denver',
      specialty: 'Family Lawyer',
      image: attorney3,
      experience: '15 years',
      cases: '320+'
    },
    {
      name: 'Alina Kevin',
      specialty: 'Property Lawyer',
      image: attorney4,
      experience: '7 years',
      cases: '150+'
    }
  ];

  const testimonials = [
    {
      quote: "The legal team provided exceptional service during my difficult case. Their professionalism and attention to detail were outstanding.",
      name: "Sarah Johnson",
      position: "Business Owner",
      image: client1
    },
    {
      quote: "I was impressed with the strategic approach to my corporate legal matters. They delivered results beyond my expectations.",
      name: "Michael Brown",
      position: "CEO, TechStart Inc.",
      image: client2
    },
    {
      quote: "As a small business owner, I needed reliable legal counsel. They've been my trusted advisors for 3 years now and outstanding performance",
      name: "Emily Wilson",
      position: "Founder, GreenSolutions",
      image: client3
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className={`home-hero-section ${isVisible ? 'home-active' : ''}`}>
        <div className="home-overlay">
          <h2>Expert Legal Solutions Tailored to Your Needs</h2>
          <p>Connecting you with top-tier legal professionals for personalized, results-driven representation.</p>
          <div className="home-hero-buttons">
            <Link to="/Lawyers" className="home-btn-primary">Browse Attorneys</Link>
            <Link to="/QueryForm" className="home-btn-secondary">Ask a Query</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="home-features">
        <div className="home-feature-card home-fade-in">
          <div className="feature-icon">⚖️</div>
          <h3>Verified Attorneys</h3>
          <p>All lawyers undergo rigorous screening for qualifications and experience.</p>
        </div>
        <div className="home-feature-card home-fade-in">
          <div className="feature-icon">🔒</div>
          <h3>Confidential Consultations</h3>
          <p>Your privacy is protected with secure, attorney-client privileged communications.</p>
        </div>
        <div className="home-feature-card home-fade-in">
          <div className="feature-icon">💼</div>
          <h3>Specialized Expertise</h3>
          <p>Find lawyers with specific experience in your exact legal needs.</p>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="home-practice-areas">
        <div className="home-section-header">
          <h2 className="home-section-title home-slide-in">PRACTICE AREAS</h2>
          <div className="home-section-divider"></div>
          <p className="home-section-subtitle">Comprehensive legal services across all major specialties</p>
        </div>
        <div className="home-areas-grid">
          {[
            { title: 'Corporate Law', desc: 'Business formation, contracts, mergers & acquisitions' },
            { title: 'Criminal Defense', desc: 'Felony, misdemeanor, DUI, and white-collar cases' },
            { title: 'Family Law', desc: 'Divorce, child custody, adoption, and prenuptials' },
            { title: 'Real Estate', desc: 'Transactions, disputes, zoning, and landlord/tenant' },
            { title: 'Immigration', desc: 'Visas, green cards, citizenship, and deportation defense' },
            { title: 'Personal Injury', desc: 'Accidents, medical malpractice, product liability' },
            { title: 'Estate Planning', desc: 'Wills, trusts, probate, and elder law' },
            { title: 'Intellectual Property', desc: 'Patents, trademarks, copyrights, and licensing' }
          ].map((area, index) => (
            <div key={index} className="home-area-card home-fade-in">
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
              <Link to={`/practice-areas/${area.title.toLowerCase().replace(' ', '-')}`} className="learn-more-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Our Attorneys Section */}
      <section className="home-attorneys-section">
        <div className="home-section-header">
          <h2 className="home-section-title home-slide-in">OUR ATTORNEYS</h2>
          <div className="home-section-divider"></div>
          <p className="home-section-subtitle">Meet our team of distinguished legal professionals</p>
        </div>
        <div className="home-attorneys-grid">
          {attorneys.map((attorney, index) => (
            <div key={index} className="home-attorney-card home-fade-in">
              <div className="home-attorney-image">
                <img src={attorney.image} alt={attorney.name} />
                <div className="attorney-badge">{attorney.experience} Experience</div>
              </div>
              <h3>{attorney.name}</h3>
              <p className="specialty">{attorney.specialty}</p>
              <p className="cases">{attorney.cases} Cases</p>
              {/* <Link to={`/attorneys/${attorney.name.toLowerCase().replace(' ', '-')}`} className="home-btn-outline">
                View Profile
              </Link> */}
            </div>
          ))}
        </div>
      </section>

      {/* Our Success Section */}
      <section className="home-success-section">
        <div className="home-section-header">
          <h2 className="home-section-title home-slide-in">OUR SUCCESS</h2>
          <div className="home-section-divider"></div>
          <p className="home-section-subtitle">Trusted by clients nationwide for exceptional results</p>
        </div>
        <div className="home-stats-grid">
          {[
            { number: '850+', label: 'Qualified Lawyers' },
            { number: '15K+', label: 'Satisfied Clients' },
            { number: '95%', label: 'Case Success Rate' },
            { number: '50+', label: 'Legal Awards' }
          ].map((stat, index) => (
            <div key={index} className="home-stat-card home-fade-in">
              <h3 className="home-stat-number">{stat.number}</h3>
              <p className="home-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials">
        <div className="home-section-header">
          <h2 className="home-section-title home-slide-in">CLIENT TESTIMONIALS</h2>
          <div className="home-section-divider"></div>
          <p className="home-section-subtitle">Hear what our clients say about their experience</p>
        </div>
        <div className="home-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="home-testimonial-card home-fade-in">
              <div className="home-testimonial-content">
                <p>"{testimonial.quote}"</p>
              </div>
              <div className="home-client-info">
                <div className="home-client-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="client-details">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <div className="rating">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="home-contact-cta">
  <div className="cta-container">
    <div className="cta-content">
      <div className="cta-text">
        <h2 className="cta-title">Need Legal Assistance?</h2>
        <p className="cta-description">
          Take the first step toward resolving your legal matter.
          Contact us today for a confidential consultation with one of our expert attorneys.
        </p>
      </div>
      <div className="cta-actions">
        <Link to="/Contact" className="cta-button-primary">
          Schedule Consultation
        </Link>
        <Link to="/Contact" className="cta-button-secondary">
          Call Now: (555) 123-4567
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;