class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #111827;
          color: white;
          padding: 3rem 0;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        .footer-logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #E10600;
          margin-bottom: 1rem;
        }
        .footer-logo span {
          color: #FFD700;
        }
        .footer-about p {
          color: #9CA3AF;
          line-height: 1.6;
        }
        .footer-links h3, .footer-contact h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .footer-links h3:after, .footer-contact h3:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background: #E10600;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        .footer-links a {
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-links a:hover {
          color: #FFD700;
        }
        .footer-contact p {
          color: #9CA3AF;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-contact i {
          margin-right: 0.8rem;
          color: #E10600;
        }
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #1F2937;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: #E10600;
          transform: translateY(-3px);
        }
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #1F2937;
          color: #6B7280;
        }
      </style>
      <div class="footer-content">
        <div class="footer-about">
          <div class="footer-logo">FAST<span>LANE</span></div>
          <p>High-performance web development at racing speed. Checkered flag quality with pit-stop efficiency.</p>
        </div>
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
<li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h3>Contact Info</h3>
          <p><i data-feather="mail"></i> contact@fastlane.dev</p>
          <p><i data-feather="phone"></i> +1 (555) RAC-ING1</p>
          <p><i data-feather="map-pin"></i> Silicon Valley, CA</p>
          <div class="footer-social">
            <a href="#" class="social-icon"><i data-feather="github"></i></a>
            <a href="#" class="social-icon"><i data-feather="twitter"></i></a>
            <a href="#" class="social-icon"><i data-feather="linkedin"></i></a>
            <a href="#" class="social-icon"><i data-feather="instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} FastLane Portfolio. All rights reserved. 🏁</p>
      </div>
    `;
    
    // Replace feather icons after rendering
    setTimeout(() => {
      feather.replace();
    }, 100);
  }
}

customElements.define('custom-footer', CustomFooter);