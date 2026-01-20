import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "../../context/TranslationContext";

const AboutPage = () => {
    const navigate = useNavigate();
    const { translateSync, currentLanguage, setCurrentLanguage } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 1000,     // animation duration
            once: false,        // allow animation every time the element is in view
            mirror: true        // animate out while scrolling past
        });
    }, []);



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>

            <Helmet>
                <title>Executive Coaching Saudi Arabia | iLap Training</title>
                <meta
                    name="keywords"
                    content="executive coaching Saudi Arabia, training centers Dubai, training courses Abu Dhabi, training courses uae, شركة تدريب بالرياض, corporate training firms, training companies in dubai, human resource consulting, corporate workshops Riyadh"
                />

            </Helmet>
            <div>

                <section className="Home-banner-3  text-white py-5 position-relative">
                    <div className="container d-flex flex-column flex-md-row align-items-center">
                        <div className="col-md-12 text-center  home-header" data-aos="fade-up" data-aos-delay="200">
                            <div className="innerbanner-txt ">
                                <h1 className="fw-bold text-center display-5  font-51">{translateSync('About Us')}</h1>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a>{translateSync('About')}</a></li>
                                    <li class="breadcrumb-item active">{translateSync('iLap Training')}</li>
                                </ol>
                            </div>

                        </div>

                    </div>
                </section>




                {/* Training That Transforms Section */}
                <section className="training-transforms-section py-5 ">
                    <div className="container">
                        {/* Section Title */}
                        {/* <h2 className="fw-bold text-center text-bg-light-color">Training That Transform</h2>
                    <p className="text-center px-md-5 mb-4">
                        Our programs go beyond traditional learning by combining cutting-edge strategies,
                        real-world applications, and expert guidance to create lasting impact.
                    </p> */}

                        <div className="row align-items-stretch">
                            {/* Left Side - Image (Full Height) */}
                            <div className="col-md-6 d-flex align-items-stretch left-side-img" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <img
                                    src="/img/About Us.jpg"
                                    alt="Training"
                                    className="img-fluid  w-100 h-100 object-fit-cover"
                                />
                            </div>

                            {/* Right Side - List Items (Full Height) */}
                            <div className="col-md-6 text-left  justify-content-between">

                                <div className="aboutpage-content newww" >
                                    <h2 className="fw-bold text-left mb-4 text-bg-light-color" data-aos="fade-up" data-aos-delay="200">{translateSync('iLap Training Academy')} </h2>

                                    <p data-aos="fade-up" data-aos-delay="200">{translateSync('Backed by HAL Training Institute, a trusted name in child skills development, iLap brings the same commitment to quality to professional training.')}</p>
                                    <p data-aos="fade-up" data-aos-delay="300">{translateSync('For decades, HAL has partnered with libraries, schools and education authorities to nurture young minds. Today, through iLap, we extend that legacy by empowering professionals with the same standard of excellence.')}</p>
                                    <p data-aos="fade-up" data-aos-delay="400">{translateSync('We combine proven educational expertise with cutting-edge corporate learning. Our expert-led programs, available in classroom, online, and corporate formats are designed to:')}</p>
                                    <ul data-aos="fade-down" data-aos-delay="500">
                                        <li>{translateSync('Unlock potential at every career stage')}</li>
                                        <li>{translateSync('Bridge ambition with achievement through practical, engaging training')}</li>
                                        <li>{translateSync('Deliver measurable results for individuals and teams')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>




                        <div className="row align-items-stretch mt-5">
                            {/* Left Side - Image (Full Height) */}
                            <div className="col-md-6 ">
                                <div className="vision-statement">
                                    <img
                                        src="/img/glasses.png"
                                        alt="Training"
                                        className="img-fluid  iconabt-img"
                                        data-aos="zoom-in" data-aos-delay="200"
                                    />
                                    <h5 data-aos="zoom-in" data-aos-delay="200">{translateSync('Vision Statement')}</h5>
                                    <p data-aos="fade-up" data-aos-delay="200">{translateSync('Transforming professional growth with innovative, impact-driven learning.')}</p>
                                </div>
                            </div>

                            {/* Right Side - List Items (Full Height) */}
                            <div className="col-md-6 ">
                                <div className="vision-statement">
                                    <img
                                        src="/img/Goall.png"
                                        alt="Training"
                                        className="img-fluid  iconabt-img"
                                        data-aos="zoom-in" data-aos-delay="200"
                                    />
                                    <h5 data-aos="zoom-in" data-aos-delay="200">{translateSync('Mission Statement')}</h5>
                                    <p data-aos="fade-up" data-aos-delay="200">{translateSync('To equip individuals and businesses with actionable skills that drive success in a fast-changing world')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


























                <section className="thisislapp-section ">
                    <div className="overlayyy">
                        <div className="container my-5 our-culture ">

                            <div className="parallex-contentt-heading">
                                <h5 className="pb-20" data-aos="fade-up" data-aos-delay="200">{translateSync('Our Culture')}</h5>
                                <p className="text-white" data-aos="fade-up" data-aos-delay="300">
                                    {translateSync("At iLap, culture is our DNA—not just a policy. We believe learning is a continuous journey, built on purpose, professionalism, and heart. True transformation starts with trust, and trust is earned through people who care. Whether you're a new graduate, leader, or partner, we commit to:")}
                                </p>
                            </div>



                            <div className="row mb-4">
                                <div className="col-md-4 mb-3">
                                    <div class="client-img-kothari-partt aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">



                                        <div class="flip-box">
                                            <div class="flip-box-inner">
                                                <div class="flip-box-front">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                                    </svg>
                                                    <h2>{translateSync('Personal')}</h2>
                                                </div>
                                                <div class="flip-box-back">
                                                    <p>{translateSync('Tailored learning, not one-size-fits-all')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div class="client-img-kothari-partt aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">



                                        <div class="flip-box">
                                            <div class="flip-box-inner">
                                                <div class="flip-box-front">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
                                                    </svg>
                                                    <h2>{translateSync('Empowering')}</h2>
                                                </div>
                                                <div class="flip-box-back">
                                                    <p>{translateSync('Confidence beyond skills')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div class="client-img-kothari-partt aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">



                                        <div class="flip-box">
                                            <div class="flip-box-inner">
                                                <div class="flip-box-front">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                                                        <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                                                    </svg>
                                                    <h2>{translateSync('Built to Last')}</h2>
                                                </div>
                                                <div class="flip-box-back">
                                                    <p>{translateSync('Growth that endures')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>


                    </div>
                </section>

                {/* Certifications */}

                <section className="certifications-section mt-0 webview">
                    <div className="container d-flex align-items-center justify-content-between rounded" >
                        {/* <div className="col-md-6 text-white text-align-left certificad-left-column">
                            <h2 className="fw-bold" >Our Certification</h2>
                            <p >We offer internationally recognized and industry-approved training to ensure high-quality education.</p>
                        </div>

                        <div
                            className="col-md-6 d-flex bg-white p-3 rounded justify-content-center align-items-center certificad-right-column"
                        >
                            <div className="col-md-5 text-center">
                                <img src="/img/dubai-img.png" className="img-fluid" alt="Dubai Knowledge" />
                            </div>
                            <div className="border-start mx-3" style={{ height: "50px" }}></div>
                            <div className="col-md-5 text-center">
                                <img src="/img/crd-certified.png" className="img-fluid" alt="CPD Certified" />
                            </div>
                        </div> */}
                        <div className="container my-5">
                            <div className="cta-box p-4 d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div>
                                    <p data-aos="fade-right" data-aos-delay="200">{translateSync('This is iLap: Rooted in Integrity, Driven by Excellence & Powered by HAL')}</p>

                                    <h3 className="mb-1 fw-bold" data-aos="fade-right" data-aos-delay="300">{translateSync('Want to experience the iLap difference?')}</h3>
                                    {/* <p className="mb-0 text-muted">Let’s connect ➔</p> */}
                                </div>
                                <p data-aos="fade-left" data-aos-delay="200" style={{ cursor: "pointer" }} onClick={() => navigate("/contact")} className="  px-4 py-2 mt-3 mt-md-0 fw-semibold">
                                    <button class="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y mt-3"><span data-text={translateSync("Let’s Connect")}>{translateSync('Let’s Connect')}➔</span></button>

                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        </>
    )
}

export default AboutPage;