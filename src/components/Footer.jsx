import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" style={{ maxWidth: '200px' }} />
          </Link>
          <span className="mb-3 mb-md-0 text-body-secondary"> 2024 GoFood, Inc</span>
        </div>
      </footer>
      <footer className="footer-section" style={{ backgroundColor: '#f2faf9' }}>
        <div className="container">
          <div className="footer-cta pt-5 pb-5" style={{ borderBottom: '1px solid #373636' }}>
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt" style={{ color: '#ff5e14', fontSize: '30px', float: 'left', marginTop: '8px' }}></i>
                  <div className="cta-text" style={{ paddingLeft: '15px', display: 'inline-block' }}>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>Find us</h4>
                    <span style={{ color: '#757575', fontSize: '15px' }}>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone" style={{ color: '#ff5e14', fontSize: '30px', float: 'left', marginTop: '8px' }}></i>
                  <div className="cta-text" style={{ paddingLeft: '15px', display: 'inline-block' }}>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>Call us</h4>
                    <span style={{ color: '#757575', fontSize: '15px' }}>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open" style={{ color: '#ff5e14', fontSize: '30px', float: 'left', marginTop: '8px' }}></i>
                  <div className="cta-text" style={{ paddingLeft: '15px', display: 'inline-block' }}>
                    <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '2px' }}>Mail us</h4>
                    <span style={{ color: '#757575', fontSize: '15px' }}>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5" style={{ position: 'relative', zIndex: '2' }}>
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo" style={{ marginBottom: '30px' }}>
                    <Link to="/" className="footer-link">
                      <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" style={{ maxWidth: '200px' }} />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p style={{ marginBottom: '14px', fontSize: '14px', color: '#7e7e7e', lineHeight: '28px' }}>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="footer-social-icon">
                    <span style={{ color: '#fff', display: 'block', fontSize: '20px', fontWeight: '700', fontFamily: 'Poppins, sans-serif', marginBottom: '20px' }}>Follow us</span>
                    <Link to="#" className="footer -link">
                      <i className="fab fa-facebook-f" style={{ height: '40px', width : '40px', textAlign: 'center', lineHeight: '38px', borderRadius: '50%', backgroundColor: '#3B5998' }}></i>
                    </Link>
                    <Link to="#" className="footer-link">
                      <i className="fab fa-twitter" style={{ height: '40px', width : '40px', textAlign: 'center', lineHeight: '38px', borderRadius: '50%', backgroundColor: '#55ACEE' }}></i>
                    </Link>
                    <Link to="#" className="footer-link">
                      <i className="fab fa-google-plus-g" style={{ height: '40px', width : '40px', textAlign: 'center', lineHeight: '38px', borderRadius: '50%', backgroundColor: '#DD4B39' }}></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '40px', position: 'relative' }}>Useful Links</h3>
                    <span style={{ content: '', position: 'absolute', left: '0', bottom: '-15px', height: '2px', width: '50px', backgroundColor: '#ff5e14' }}></span>
                  </div>
                  <ul>
                    <li><Link to="#" className="footer-link">Home</Link></li>
                    <li><Link to="#" className="footer-link">about</Link></li>
                    <li><Link to="#" className="footer-link">services</Link></li>
                    <li><Link to="#" className="footer-link">portfolio</Link></li>
                    <li><Link to="#" className="footer-link">Contact</Link></li>
                    <li><Link to="#" className="footer-link">About us</Link></li>
                    <li><Link to="#" className="footer-link">Our Services</Link></li>
                    <li><Link to="#" className="footer-link">Expert Team</Link></li>
                    <li><Link to="#" className="footer-link">Contact us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '600', marginBottom: '40px' }}>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p style={{ marginBottom: '14px', fontSize: '14px', color: '#7e7e7e', lineHeight: '28px' }}>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" style={{ width: '100%', padding: '14px 28px', backgroundColor: '#2E2E2E', border: '1px solid #2E2E2E', color: '#fff' }} />
                      <button type="submit" style={{ position: 'absolute', right: '0', backgroundColor: '#ff5e14', padding: '13px 20px', border: '1px solid #ff5e14' }}>
                        <i className="fab fa-telegram-plane" style={{ color: '#fff', fontSize: '22px', transform: 'rotate(-6deg)' }}></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area" style={{ backgroundColor: '#202020', padding: '25px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p style={{ margin: '0', fontSize: '14px', color: '#878787' }}>Copyright &copy; 2024, All Right Reserved <Link to="#" className="footer-link">GoFood</Link></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    < li><Link to="#" className="footer-link">Terms</Link></li>
                    <li><Link to="#" className="footer-link">Privacy</Link></li>
                    <li><Link to="#" className="footer-link">Policy</Link></li>
                    <li><Link to="#" className="footer-link">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}