
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "../../context/TranslationContext";
import categoryData from "../../data/categories.json"; // Import static categories
import featuredProductData from "../../data/featuredProducts.json"; // Import static products

const HomePage = () => {
    const { translateSync } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const features = [
        { title: "Wide Product Range", icon: "bi-grid-3x3-gap-fill" },
        { title: "Quality Tested Materials", icon: "bi-award-fill" },
        { title: "Bulk Order Support", icon: "bi-box-seam-fill" },
        { title: "Reliable Supply & Support", icon: "bi-truck" }
    ];

    return (
        <div className="industrial-home" style={{ marginTop: "50px" }}>
            <Helmet>
                <title>ALPHA | Industrial Seals & Rubber Products</title>
                <meta name="description" content="Reliable industrial seals, rubber products, and BPS safety solutions for B2B applications." />
            </Helmet>

            {/* 1. Hero Section (Swiper Carousel) */}
            <section className="hero-section p-0 bg-dark" style={{ height: 'auto', minHeight: 'unset' }}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="hero-swiper"
                    style={{ width: '100%', height: '100%' }}
                >
                    <SwiperSlide>
                        <div className="hero-slide-item" style={{ width: '100%', height: '750px', position: 'relative' }}>
                            <img src="/img/banner-new-1.png" alt="Industrial Manufacturing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))' }}>
                                <div className="container text-center text-white">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10" data-aos="fade-up">
                                            <h1 className="hero-title display-3 fw-bold mb-4 text-white">World-Class Industrial Solutions</h1>
                                            <p className="hero-subtitle lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>Precision Engineering & Safety Solutions for Global Heavy Industries.</p>
                                            <button className="btn btn-hero btn-lg px-5 py-3" onClick={() => navigate('/products')}>Explore Products</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slide-item" style={{ width: '100%', height: '750px', position: 'relative' }}>
                            <img src="/img/banner-new-2.png" alt="Precision Components" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))' }}>
                                <div className="container text-center text-white">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <h1 className="hero-title display-3 fw-bold mb-4 text-white">Uncompromising Quality Standard</h1>
                                            <p className="hero-subtitle lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>ISO 9001:2015 & AEO Certified Manufacturing Excellence.</p>
                                            <button className="btn btn-hero btn-lg px-5 py-3" onClick={() => navigate('/contact')}>Partner With Us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-slide-item" style={{ width: '100%', height: '750px', position: 'relative' }}>
                            <img src="/img/banner-new-3.png" alt="Technical Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))' }}>
                                <div className="container text-center text-white">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10">
                                            <h1 className="hero-title display-3 fw-bold mb-4 text-white">Precision Custom Molding</h1>
                                            <p className="hero-subtitle lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>Bespoke Rubber & Plastic Solutions Tailored to Your Needs.</p>
                                            <button className="btn btn-hero btn-lg px-5 py-3" onClick={() => navigate('/products')}>View Capabilities</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* 2. Certificates & Group Companies */}
            <section className="certified-section-bg">
                <div className="container text-center" style={{ maxWidth: '1000px' }}>
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <div style={{ height: '2px', width: '50px', backgroundColor: 'var(--accent-color)', marginRight: '15px' }}></div>
                        <h3 className="text-uppercase text-secondary fw-bold letter-spacing-2 mb-0">Certified Excellence</h3>
                        <div style={{ height: '2px', width: '50px', backgroundColor: 'var(--accent-color)', marginLeft: '15px' }}></div>
                    </div>

                    <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                        Committed to international quality standards (ISO 9001:2015) and secure supply chain management (AEO Certified).
                    </p>

                    <div className="row justify-content-center gap-4">
                        {/* ISO Certificate */}
                        <div className="col-md-5 col-lg-4">
                            <div className="certificate-card h-100">
                                <div className="mb-3 p-2 bg-white rounded border border-light">
                                    <img src="/img/certificates/cert-2.jpg" alt="ISO 9001:2015" className="img-fluid" style={{ maxHeight: '140px', objectFit: 'contain' }} />
                                </div>
                                <h5 className="fw-bold text-dark mb-1">ISO 9001:2015</h5>
                                <p className="text-muted small mb-0">Quality Management System</p>
                            </div>
                        </div>

                        {/* AEO Certificate */}
                        <div className="col-md-5 col-lg-4">
                            <div className="certificate-card h-100">
                                <div className="mb-3 p-2 bg-white rounded border border-light">
                                    <img src="/img/certificates/cert-1.jpg" alt="AEO Certified" className="img-fluid" style={{ maxHeight: '140px', objectFit: 'contain' }} />
                                </div>
                                <h5 className="fw-bold text-dark mb-1">AEO Certified</h5>
                                <p className="text-muted small mb-0">Authorised Economic Operator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Alpha Group Divisions (Dark BG) */}
            <section className="py-5 division-section-bg">
                <div className="container" style={{ maxWidth: '1100px' }}>
                    <div className="position-relative mb-5 text-center">
                        <span className="bg-white px-4 py-2 rounded shadow-sm fw-bold border border-2 border-primary text-uppercase" style={{ color: 'var(--primary-color)', letterSpacing: '1px' }}>
                            Alpha Group Divisions
                        </span>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Division 1: Alpha Seals */}
                        <div className="col-lg-6 col-md-12">
                            <div className="division-card">
                                <div className="division-image-wrapper">
                                    <img src="/img/divisions/div-1.jpg" alt="Alpha Seals" />
                                </div>
                                <div className="division-content">
                                    <h4>ALPHA <span>SEALS</span></h4>
                                    <small>Sealing Solutions</small>
                                </div>
                            </div>
                        </div>

                        {/* Division 2: Alpha Belts */}
                        <div className="col-lg-6 col-md-12">
                            <div className="division-card">
                                <div className="division-image-wrapper">
                                    <img src="/img/divisions/div-2.jpg" alt="Alpha Belts" />
                                </div>
                                <div className="division-content">
                                    <h4>ALPHA <span>BELTS</span></h4>
                                    <small>Industrial V-Belts</small>
                                </div>
                            </div>
                        </div>

                        {/* Division 3: Rubber Products */}
                        <div className="col-lg-6 col-md-12">
                            <div className="division-card">
                                <div className="division-image-wrapper">
                                    <img src="/img/divisions/rubber-products.jpg" alt="Rubber Products" />
                                </div>
                                <div className="division-content">
                                    <h4>RUBBER <span>PRODUCTS</span></h4>
                                    <small>Custom Molded Parts</small>
                                </div>
                            </div>
                        </div>

                        {/* Division 4: Heavy Engineering */}
                        <div className="col-lg-6 col-md-12">
                            <div className="division-card">
                                <div className="division-image-wrapper">
                                    <img src="/img/divisions/heavy-engineering.jpg" alt="Heavy Engineering" />
                                </div>
                                <div className="division-content">
                                    <h4>HEAVY <span>ENGINEERING</span></h4>
                                    <small>Industrial Fabrication</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="py-5 bg-white">
                <div className="container" style={{ maxWidth: '1240px' }}>
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2>Our Product Categories</h2>
                    </div>
                    <div className="row g-4">
                        {categoryData.map((cat, index) => (
                            <div className="col-md-4" key={cat.id} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="category-card h-100" onClick={() => navigate('/products')}>
                                    <div className="category-icon-wrapper">
                                        <i className={`bi ${cat.icon}`}></i>
                                    </div>
                                    <div className="category-content">
                                        <h4>{cat.title}</h4>
                                        <p className="text-muted">{cat.description}</p>
                                        <span className="text-primary fw-bold text-decoration-none" style={{ color: 'var(--accent-color)' }}>
                                            Explore <i className="bi bi-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
            {/* 4. Why Choose Us */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="row text-center g-4">
                        {features.map((feat, index) => (
                            <div className="col-md-3" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="why-us-item">
                                    <div className="why-us-icon">
                                        <i className={`bi ${feat.icon}`}></i>
                                    </div>
                                    <h5 className="fw-bold">{feat.title}</h5>
                                    <p className="text-muted small">Commitment to excellence in every order.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Featured Products (Static Data) */}
            <section className="py-5 bg-industrial-light technical-support-cta">
                <div className="container" style={{ maxWidth: '1240px' }}>
                    <div className="text-center mb-5" data-aos="fade-up">
                        <h2>Featured Products</h2>
                    </div>
                    <div className="row g-4">
                        {featuredProductData.map((prod, index) => (
                            <div className="col-md-3 col-sm-6" key={prod.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                                <div className="product-card h-100 d-flex flex-column bg-white rounded overflow-hidden shadow-sm hover-lift">
                                    {/* Image Section */}
                                    <div className="p-4 d-flex align-items-center justify-content-center border-bottom bg-white" style={{ height: '240px' }}>
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="img-fluid transition-transform"
                                            style={{ maxHeight: '100%', objectFit: 'contain' }}
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 d-flex flex-column flex-grow-1 text-start relative">
                                        <h5 className="fw-bold mb-2 text-dark product-title" style={{ fontSize: '1.1rem' }}>{prod.name}</h5>

                                        {/* Accent Line */}
                                        <div className="mb-3 rounded" style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-color)' }}></div>

                                        <p className="text-muted small mb-4 flex-grow-1 product-desc" style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                                            {prod.description}
                                        </p>

                                        <button className="btn btn-link text-decoration-none fw-bold p-0 text-start align-self-start product-btn" style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                                            View Details <i className="bi bi-arrow-right ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 5. About Us (Factory) */}
            <section className="bg-white pb-5 mt-5">
                <div className="container px-0" style={{ maxWidth: '1240px' }}>
                    <div className="text-center mb-5">
                        <h2>About Alpha Tech</h2>
                    </div>
                    <div className="row g-0 shadow-lg overflow-hidden rounded" data-aos="fade-up">
                        <div className="col-lg-6 position-relative" style={{ minHeight: '500px' }}>
                            <img src="/img/banner-2.jpg" alt="Factory" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.1)' }}></div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                            <div className="p-5 text-start">
                                <div className="mb-3">
                                    <span className="text-uppercase fw-bold letter-spacing-2" style={{ color: 'var(--accent-color)', fontSize: '0.85rem' }}>Since 2005</span>
                                </div>
                                <h3 className="text-white mb-4 display-5 fw-bold">Precision. Quality. Speed.</h3>
                                <p className="lead mb-4 text-white-50" style={{ lineHeight: '1.8' }}>
                                    Your trusted partner for high-performance sealing solutions. We combine decades of expertise with cutting-edge manufacturing.
                                </p>
                                <p className="mb-4 text-white-50" style={{ lineHeight: '1.7' }}>
                                    ALPHA Technical Rubber Products has been a specialist in the field of hydraulic, pneumatic and rotary seals for over two decades. We design and manufacture custom molded parts for heavy industries across the globe.
                                </p>

                                <div className="row g-3 mb-5">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill me-3 fs-5" style={{ color: 'var(--accent-color)' }}></i>
                                            <span className="fw-semibold">ISO 9001:2015 Certified</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill me-3 fs-5" style={{ color: 'var(--accent-color)' }}></i>
                                            <span className="fw-semibold">Global Distribution</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill me-3 fs-5" style={{ color: 'var(--accent-color)' }}></i>
                                            <span className="fw-semibold">Custom Engineering</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill me-3 fs-5" style={{ color: 'var(--accent-color)' }}></i>
                                            <span className="fw-semibold">AEO Accredited</span>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-lg rounded-0 fw-bold px-4 py-2 text-white border-2"
                                    onClick={() => navigate('/about')}
                                    style={{
                                        borderColor: 'var(--accent-color)',
                                        backgroundColor: 'transparent',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = 'var(--accent-color)';
                                    }}
                                >
                                    Learn More About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Technical Support CTA */}
            <section className="technical-support-cta">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-4">Need help selecting the right product or size?</h2>
                            <p className="lead text-white-50 mb-4">Our engineering team is ready to assist you with technical specifications and custom requirements.</p>
                            <button className="btn btn-light btn-lg fw-bold" style={{ color: 'var(--primary-color)' }} onClick={() => navigate('/contact')}>
                                Contact Technical Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default HomePage;
