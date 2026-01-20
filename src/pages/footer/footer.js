
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../context/TranslationContext";

const FooterPage = () => {
    const { translateSync } = useTranslation();

    return (
        <footer className="industrial-footer">
            <div className="container">
                <div className="row g-4">
                    {/* 1. Left: Company Info */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <Link to="/" className="d-block mb-3 text-decoration-none">
                            <img
                                src="/img/alpha-logo.png"
                                alt="Alpha Technical Rubber Products"
                                style={{ height: '60px', objectFit: 'contain' }}
                            />
                        </Link>
                        <p className="footer-company-desc">
                            Specializing in high-performance rubber products for industrial applications.
                            Quality, durability, and innovation since 2005. Premium rubber solutions for demanding industrial applications worldwide.
                        </p>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/applications">Applications</Link></li>
                            <li><Link to="/facilities">Facilities</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </div>

                    {/* 3. Address */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h5 className="footer-heading">Address.</h5>
                        <ul className="list-unstyled footer-contact">
                            <li className="d-flex mb-3">
                                <i className="bi bi-geo-alt mt-1 me-2 text-primary"></i>
                                <span>Alpha Technical Rubber Products W.L.L</span>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="bi bi-telephone mt-1 me-2 text-primary"></i>
                                <span>+973 1700 6820</span>
                            </li>
                            <li className="d-flex mb-3">
                                <i className="bi bi-envelope mt-1 me-2 text-primary"></i>
                                <span>sales@alphatechrubber.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Newsletter</h5>
                        <p className="text-muted small mb-3">Subscribe to our weekly Newsletter and receive updates via email.</p>
                        <form className="mb-3 d-flex gap-2">
                            <input type="email" className="form-control form-control-sm" placeholder="Email*" aria-label="Email" />
                            <button className="btn btn-primary btn-sm" type="submit" style={{ backgroundColor: '#00acc1', borderColor: '#00acc1' }}>
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </form>
                        <div className="social-icons d-flex gap-2">
                            <a href="#" className="social-btn facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="social-btn twitter"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="social-btn linkedin"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="social-btn youtube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom text-center mt-5 pt-4 border-top">
                    <p className="mb-0 text-muted small">
                        Copyright © Alpha Rubbers. <span style={{ color: '#00acc1' }}>♥</span> All Rights Reserved.2026
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;