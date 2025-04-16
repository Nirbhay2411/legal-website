import "../../assets/css/LandingPage.css";
import Navbar from "../Navbar";
import { AiOutlineUser } from "react-icons/ai";
import { FaBalanceScale, FaCalendarCheck, FaUserTie } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      <Navbar />
      <div className="landing-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Get Expert Legal Advice Anytime, Anywhere</h1>
            <p className="xyz">
              Connecting you with top lawyers for instant legal consultations.
            </p>
            <button className="cta-button" onClick={() => navigate("/login")}>
              Book a Consultation
            </button>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <FaUserTie className="icon" />
              <h3>1. Find a Lawyer</h3>
              <p>Browse our network of experienced legal professionals.</p>
            </div>
            <div className="step">
              <FaCalendarCheck className="icon" />
              <h3>2. Book a Consultation</h3>
              <p>Schedule an online or in-person consultation with ease.</p>
            </div>
            <div className="step">
              <FaBalanceScale className="icon" />
              <h3>3. Get Legal Advice</h3>
              <p>Receive expert legal guidance tailored to your needs.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
  <h2>What Our Clients Say</h2>
  <p className="section-subtitle">Hear from people who found legal solutions through our platform</p>
  
  <div className="testimonial-cards">
    {/* Testimonial 1 */}
    <div className="testimonial-card">
      <div className="rating">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
      </div>
      <p className="testimonial-text">
        "I was facing a complex divorce situation and didn't know where to turn. 
        Through this platform, I connected with an amazing family lawyer who guided 
        me through every step. The video consultation was so convenient, and I felt 
        truly heard. We resolved my case favorably in just 3 months!"
      </p>
      <div className="client-info">
        <span className="client-icon">👩</span>
        <div>
          <h4>BHARAT S.</h4>
          <p className="client-details">San Francisco, CA • Property Case</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="testimonial-card">
      <div className="rating">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
      </div>
      <p className="testimonial-text">
        "As a small business owner, I needed contract review quickly before signing 
        a major deal. I found a corporate lawyer within hours who identified several 
        red flags I had missed. The flat-fee pricing was transparent, and I saved 
        thousands by avoiding a bad contract. Will definitely use this service again!"
      </p>
      <div className="client-info">
        <span className="client-icon">👨</span>
        <div>
          <h4>Jay P.</h4>
          <p className="client-details">Chicago, IL • Business Contract Review</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="testimonial-card">
      <div className="rating">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
      </div>
      <p className="testimonial-text">
        "After my car accident, I was overwhelmed with insurance paperwork and medical 
        bills. The personal injury lawyer I found here handled everything while I 
        focused on recovery. They negotiated a settlement 3x higher than the insurance 
        company's initial offer. The 24/7 chat support was incredibly helpful too!"
      </p>
      <div className="client-info">
        <span className="client-icon">👩</span>
        <div>
          <h4>Priya K.</h4>
          <p className="client-details">Austin, TX • Personal Injury Case</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="legal-trends">
  <h2>Current Legal Landscape</h2>
  <p className="section-subtitle">Data-driven insights from 15,000+ closed cases</p>

  <div className="trends-grid">
    {/* Trend 1 - Case Resolution */}
    <div className="trend-card">
      <h3>🕒 Average Resolution Times</h3>
      <div className="trend-bars">
        <div className="trend-bar">
          <span className="category">Family Law</span>
          <div className="bar-container">
            <div className="bar" style={{width: '78%'}}>
              <span className="value">8.2 months</span>
            </div>
          </div>
        </div>
        <div className="trend-bar">
          <span className="category">Personal Injury</span>
          <div className="bar-container">
            <div className="bar" style={{width: '65%'}}>
              <span className="value">6.5 months</span>
            </div>
          </div>
        </div>
        <div className="trend-bar">
          <span className="category">Business Contracts</span>
          <div className="bar-container">
            <div className="bar" style={{width: '32%'}}>
              <span className="value">11 days</span>
            </div>
          </div>
        </div>
      </div>
      <p className="trend-footnote">Based on Q2 2024 platform data. 23% faster than industry averages.</p>
    </div>

    {/* Trend 2 - Success Rates */}
    <div className="trend-card">
      <h3>📈 Case Success Metrics</h3>
      <div className="success-metrics">
        <div className="metric">
          <div className="metric-value">92%</div>
          <div className="metric-label">Favorable divorce settlements</div>
        </div>
        <div className="metric">
          <div className="metric-value">3.1x</div>
          <div className="metric-label">Higher injury compensation</div>
        </div>
        <div className="metric">
          <div className="metric-value">$1.4M</div>
          <div className="metric-label">Average business dispute savings</div>
        </div>
      </div>
      <div className="comparison-chart">
        <div className="chart-legend">
          <span className="platform">Our Platform</span>
          <span className="industry">Industry Avg</span>
        </div>
        <div className="chart-bars">
          <div className="chart-bar-group">
            <div className="chart-bar platform" style={{height: '80%'}}></div>
            <div className="chart-bar industry" style={{height: '45%'}}></div>
          </div>
          <div className="chart-bar-group">
            <div className="chart-bar platform" style={{height: '75%'}}></div>
            <div className="chart-bar industry" style={{height: '60%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="stats-section">
  <h2>Empowering Legal Access Across India</h2>
  <div className="stats-grid">
    <div className="stat-box">
      <h3>20K+</h3>
      <p>Users Helped</p>
    </div>
    <div className="stat-box">
      <h3>5K+</h3>
      <p>Consultations Completed</p>
    </div>
    <div className="stat-box">
      <h3>98%</h3>
      <p>Client Satisfaction</p>
    </div>
  </div>
</section>
<section className="mission-vision">

  <h2>Our Vision</h2>
  <p>To revolutionize the way legal services are delivered by embracing technology and creating a transparent, user-friendly system.</p>
</section>




        {/* Call to Action Section */}
        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of users who have found expert legal help with us.</p>
          <button className="cta-button" onClick={() => navigate("/login")}>
            Find Your Lawyer Now
          </button>
        </div>

        {/* Footer */}
        {/* <div className="footer">
          <p>&copy; 2025 Legal Consultation Marketplace. All rights reserved.</p>
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
