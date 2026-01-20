import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Country, State, City } from 'country-state-city';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ApiProvider from "../../apiProvider/contactusApi"
import faceBookLogo from "../../assets/facebook-icon.png"
import instagramLogo from "../../assets/instagram.png"
import linkedInLogo from "../../assets/linkedIn.png"
import { useTranslation } from "../../context/TranslationContext";

import { Helmet } from 'react-helmet-async';

const countryList = Country.getAllCountries();

const contactusSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phoneNo: Yup.string().required('Phone no is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    country: Yup.string().required("Country is required"),
});

const ContactPage = () => {
    const navigate = useNavigate();
    const { translateSync, currentLanguage, setCurrentLanguage } = useTranslation();

    const formSubmit = async (value) => {
        try {
            const input = {
                fullName: value.fullName,
                phoneNo: value.phoneNo,
                email: value.email,
                country: value.country,
                message: value.message
            }
            console.log(input, "input");
            const result = await ApiProvider.contactus(input)
            console.log(result, "result");
            if (result && result.response && result.status == 200) {
                // navigate("/login")
            }

        } catch (error) { }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>


            <Helmet>
                <title>Professional courses in uae | iLap Training</title>
                <meta
                    name="keywords"
                    content="hr courses in abu dhabi, course abu dhabi, risk management in oil and gas projects, fidic training dubai, event management course, timetraining, training program, uae consulting"
                />

            </Helmet>
            <div>
                <section className="Home-banner-3  text-white py-5 position-relative">
                    <div className="container d-flex flex-column flex-md-row align-items-center">
                        <div className="col-md-12 text-center  home-header" >
                            <div className="innerbanner-txt " data-aos="zoom-in" data-aos-delay="200">
                                <h1 className="fw-bold text-center display-5  font-51">{translateSync('Contact Us')}</h1>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a onClick={() => navigate("/")}>{translateSync('Home')}</a></li>
                                    <li class="breadcrumb-item active">{translateSync('Contact Us')}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Training That Transforms Section */}
                <section className="training-transforms-section py-5 ">
                    <div className="container-fluid">
                        {/* Section Title */}
                        {/* <h2 className="fw-bold text-center text-bg-light-color">Training That Transform</h2>
                    <p className="text-center px-md-5 mb-4">
                        Our programs go beyond traditional learning by combining cutting-edge strategies,
                        real-world applications, and expert guidance to create lasting impact.
                    </p> */}

                        <div className="row align-items-stretch">
                            {/* Left Side - Image (Full Height) */}
                            <div className="col-md-6 d-flex align-items-stretch left-side-img" data-aos="fade-right" data-aos-delay="200">
                                <img
                                    src="/img/contact us.jpg"
                                    alt="Training"
                                    className="img-fluid rounded w-100 h-100 object-fit-cover"
                                />
                            </div>

                            {/* Right Side - List Items (Full Height) */}
                            <div className="col-md-6 text-left  justify-content-between" data-aos="fade-right" data-aos-delay="200">

                                <div className="contactpage-content">
                                    <h2 className="fw-bold text-center  mb-1 " data-aos="fade-up" data-aos-delay="200">{translateSync('Get in Touch')}</h2>

                                    <p className=" text-center mb-10 " data-aos="fade-up" data-aos-delay="300">{translateSync("Fill out the form and we'll be in touch soon!")}</p>

                                    <Formik
                                        initialValues={{
                                            fullName: '',
                                            email: '',
                                            phoneNo: '',
                                            country: '',
                                            message: ''
                                        }}
                                        validationSchema={contactusSchema}
                                        onSubmit={(values, { resetForm }) => {
                                            formSubmit(values);
                                            resetForm();
                                        }}
                                    >
                                        {({ values, errors, touched, handleChange, handleBlur }) => (
                                            <Form>
                                                <div className="row mt-6">
                                                    <div className="col-6 contactfieldd mb-4 text-start" data-aos="fade-up" data-aos-delay="200">
                                                        <input
                                                            name="fullName"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.fullName}
                                                            type="text"
                                                            placeholder={translateSync('Enter your Full Name')}
                                                            className='form-control'
                                                        />
                                                        <span>
                                                            {errors.fullName && touched.fullName && <div className="error_msg">{translateSync(errors.fullName)}</div>}
                                                        </span>
                                                    </div>
                                                    <div className="col-6 contactfieldd mb-4 text-start" data-aos="fade-up" data-aos-delay="200">
                                                        <input
                                                            name="phoneNo"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.phoneNo}
                                                            type="text"
                                                            placeholder={translateSync("Phone Number")}
                                                            className='form-control'
                                                        />
                                                        <span>
                                                            {errors.phoneNo && touched.phoneNo && <div className="error_msg">{translateSync(errors.phoneNo)}</div>}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className=" col-6 contactfieldd mb-4 text-start " data-aos="fade-up" data-aos-delay="200">
                                                        <input
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            type="email"
                                                            placeholder={translateSync("Enter your Mail")}
                                                            className='form-control'
                                                        />
                                                        <span>
                                                            {errors.email && touched.email && <div className="error_msg">{translateSync(errors.email)}</div>}
                                                        </span>
                                                    </div>

                                                    <div className=" col-6 contactfieldd mb-4 text-start" data-aos="fade-up" data-aos-delay="200">
                                                        <select
                                                            className='form-control'
                                                            style={{ height: "50px" }}
                                                            name="country"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.country}
                                                        >
                                                            <option value="">{translateSync('Select a country')}</option>
                                                            {countryList.length > 0 ?
                                                                countryList.map((country, i) => {
                                                                    return (
                                                                        <option key={i} value={country.isoCode}>
                                                                            {country.name}
                                                                        </option>
                                                                    )
                                                                })
                                                                :
                                                                <option>No records</option>
                                                            }
                                                        </select>
                                                        <span>
                                                            {errors.country && touched.country && <div className="error_msg">{translateSync(errors.country)}</div>}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className=" col-12 contactfieldd mb-3 text-start mb-4">
                                                    <textarea
                                                        placeholder={translateSync("Enter Your Message ")}
                                                        style={{ height: "130px" }}
                                                        className='form-control'
                                                        name="message"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.message}
                                                    ></textarea>
                                                </div>

                                                <button className="btn btn-sm input-size btn btn-primary bg-light-color contacttform-btnn  form-submit-btn" type="submit">{translateSync('Submit')}</button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>





                <section className="mb-5">
                    <div className="container">
                        <div className="row align-items-stretch mt-5">
                            {/* Left Side - Image (Full Height) */}
                            <div className="col-md-4 ">
                                <div className="contactbox contactpage-address-part" data-aos="fade-up" data-aos-delay="200">
                                    <img
                                        src="/img/locationn.png"
                                        alt="Training"
                                        style={{ width: "50px", height: "50px", padding: "10px" }}
                                        className="img-fluid wiggle-icon  iconabt-imgg bg-light-color"
                                        data-aos="zoom-in" data-aos-delay="200"
                                    />
                                    <h5 data-aos="fade-up" data-aos-delay="200">{translateSync('Address')}</h5>
                                    <p data-aos="fade-up" data-aos-delay="200">{translateSync('Hal Training Institute Al ghurair office tower #442A Al rigga - Dubai')}</p>
                                </div>
                            </div>

                            {/* Right Side - List Items (Full Height) */}
                            <div className="col-md-4 ">
                                <div className="contactbox contactpage-address-part" data-aos="fade-up" data-aos-delay="200">
                                    <img
                                        src="/img/mail.png"
                                        alt="Training"
                                        style={{ width: "50px", height: "50px", padding: "10px" }}
                                        className="img-fluid wiggle-icon  iconabt-imgg bg-light-color"
                                        data-aos="zoom-in" data-aos-delay="200"
                                    />
                                    <h5 data-aos="fade-up" data-aos-delay="200">{translateSync('Email')}</h5>
                                    <p data-aos="fade-up" data-aos-delay="200">support@ilap.me <br></br>info@ilap.me</p>

                                </div>
                            </div>


                            {/* Right Side - List Items (Full Height) */}
                            <div className="col-md-4 ">
                                <div className="contactbox contactpage-address-part" data-aos="fade-up" data-aos-delay="200">
                                    <img
                                        src="/img/call-sharp.png"
                                        alt="Training"
                                        style={{ width: "50px", height: "50px", padding: "10px" }}
                                        className="img-fluid wiggle-icon  iconabt-imgg bg-light-color"
                                        data-aos="zoom-in" data-aos-delay="200"
                                    />
                                    <h5 data-aos="fade-up" data-aos-delay="200">{translateSync('Phone Number')}</h5>
                                    <p data-aos="fade-up" data-aos-delay="200">+971 48835988
                                        <br></br>+971 502550228</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-lg font-bold mb-3 contact-heading-txtt" data-aos="fade-up" data-aos-delay="200">{translateSync('Social Media')}</h2>
                    <div className="flex space-x-4 mt-5 mb-3">
                        {/* YouTube */}


                        <a
                            onClick={() => window.open("https://www.youtube.com/@iLap-me", "_blank")}
                            // href="https://youtube.com"
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
                        >
                            <img src="/img/yt.png" alt="YouTube" data-aos="zoom-in" data-aos-delay="200" style={{ width: "45px", height: "45px", padding: "10px" }} className=" iconabt-imgg lastssec bg-light-color" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
                        >


                            <img src={faceBookLogo} alt="Facebook" data-aos="zoom-in" data-aos-delay="200" style={{ width: "45px", height: "45px", padding: "0px" }} className=" iconabt-imgg lastssec bg-light-color" />
                        </a>

                        {/* Instagram */}
                        <a
                            style={{ cursor: "pointer" }}

                            onClick={() => window.open("https://www.instagram.com/ilap_academy?igsh=Y2p4NTVzeWczZW93", "_blank")}
                            // target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
                        >
                            <img src={instagramLogo} alt="Instagram" data-aos="zoom-in" data-aos-delay="200" style={{ width: "45px", height: "45px", padding: "0px" }} className=" iconabt-imgg lastssec bg-light-color" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            // href="https://linkedin.com"
                            // target="_blank"
                            style={{ cursor: "pointer" }}
                            onClick={() => window.open("https://www.linkedin.com/company/ilap-training-academy/", "_blank")}
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
                        >
                            <img src={linkedInLogo} alt="LinkedIn" data-aos="zoom-in" data-aos-delay="200" style={{ width: "45px", height: "45px", padding: "0px" }} className=" iconabt-imgg lastssec bg-light-color" />
                        </a>
                    </div>
                </div>





                <section className="map-areaa" data-aos="fade-up" data-aos-delay="200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7216.172492635831!2d55.317537!3d25.267684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dada10fb32d%3A0xe5b3d0558fd8eefe!2sHAL%20Training%20Institute%20L.L.C!5e0!3m2!1sen!2sae!4v1742977549884!5m2!1sen!2sae" style={{ width: "100%", height: "500px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </section>



            </div>

        </>
    )
}

export default ContactPage;