
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useTranslation } from "../../context/TranslationContext";
import categoryData from "../../data/categories.json"; // Import static data

const Header = () => {
    const { translateSync } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.auth.token);

    // State
    const [scrolled, setScrolled] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarClasses = `navbar navbar-expand-lg fixed-top industrial-navbar ${scrolled ? 'shadow-sm' : ''}`;

    const handleCategoryClick = (category) => {
        navigate(`/products/${category.toLowerCase().replace(' ', '-')}`);
        setShowMegaMenu(false);
        setMobileMenuOpen(false);
    };

    return (
        <nav className={navbarClasses}>
            <div className="container">
                {/* 1. Left: Company Logo (PROVIDED LOGO) */}
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="/img/alpha-logo.png"
                        alt="ALPHA Technical Rubber Products"
                        style={{ height: '55px', objectFit: 'contain' }} // Fixed height, scaling properly
                    />
                </NavLink>

                {/* Mobile Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
                    {/* 2. Center: Navigation Links */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{translateSync('Home')}</NavLink>
                        </li>

                        {/* Products Mega Menu */}
                        <li
                            className="nav-item dropdown position-static"
                            onMouseEnter={() => setShowMegaMenu(true)}
                            onMouseLeave={() => setShowMegaMenu(false)}
                        >
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                aria-expanded={showMegaMenu}
                            >
                                {translateSync('Products')}
                            </a>

                            {/* Desktop Mega Menu with Static JSON Data */}
                            <div className={`dropdown-menu mega-menu ${showMegaMenu ? 'show' : ''}`} style={{ left: '50%', transform: 'translateX(-50%)' }}>
                                <div className="row">
                                    {categoryData.map((category) => (
                                        <div className="col-md-4" key={category.id}>
                                            <h6>{category.title}</h6>
                                            <ul className="list-unstyled">
                                                {category.subcategories.map((sub) => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            to={`/products/${sub.id}`}
                                                            onClick={() => setShowMegaMenu(false)}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/applications">{translateSync('Applications')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/resources">{translateSync('Resources')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">{translateSync('About Us')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">{translateSync('Contact Us')}</NavLink>
                        </li>
                    </ul>

                    {/* 3. Right: Icons */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Search */}
                        <div className="search-wrapper position-relative">
                            {searchOpen ? (
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Search..."
                                    autoFocus
                                    onBlur={() => setSearchOpen(false)}
                                    style={{ width: '200px' }}
                                />
                            ) : (
                                <i className="bi bi-search fs-5 text-secondary cursor-pointer" onClick={() => setSearchOpen(true)} style={{ cursor: 'pointer', color: 'var(--primary-color)' }}></i>
                            )}
                        </div>

                        {/* Cart */}
                        <div className="cart-wrapper position-relative" style={{ cursor: 'pointer' }} onClick={() => navigate('/cart')}>
                            <i className="bi bi-cart3 fs-4" style={{ color: 'var(--primary-color)' }}></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                                {useSelector((state) => state.cart?.totalQuantity || 0)}
                            </span>
                        </div>

                        {/* Login */}
                        {isAuthenticated ? (
                            <NavLink className="btn btn-sm btn-industrial-outline text-dark border-dark" to="/dashboard">{translateSync('Dashboard')}</NavLink>
                        ) : (
                            <NavLink className="btn btn-sm btn-industrial-primary" to="/login" style={{ padding: "5px 20px !important" }}>{translateSync('Login')}</NavLink>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;