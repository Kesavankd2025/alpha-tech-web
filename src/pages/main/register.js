import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './myaccount.css';
import apiProvider from '../../apiProvider/api';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { Country, State, City } from 'country-state-city';
import { useTranslation } from "../../context/TranslationContext";

const SignupSchema = Yup.object().shape({
    userName: Yup.string().required('User name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobileNumber: Yup.string().required('Mobile number is required'),
    country: Yup.string().required('Country is required'),
    preferredLanguage: Yup.string().required('Preferred language is required'),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(/[@$!%*?&]/, "Must contain at least one special character (@$!%*?&)")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    // ✅ FIX HERE
    acceptTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
});

const RegisterPage = () => {

    const navigate = useNavigate();
    const [countries, setCountries] = useState([]);
    const { translateSync, currentLanguage, setCurrentLanguage } = useTranslation();

    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    const formSubmit = async (value) => {
        try {
            const input = {
                userName: value.userName,
                email: value.email,
                mobileNumber: value.mobileNumber,
                country: value.country,
                preferredLanguage: value.preferredLanguage,
                password: value.password,
                confirmPassword: value.confirmPassword
            }
            console.log(input, "input");
            const result = await apiProvider.register(input)
            console.log(result, "result");
            if (result && result.response && result.status == 200) {
                navigate("/login")
            }
            if (result.response.response.data.message) {
                let toastMsg = result.response.response.data.message
                console.log(toastMsg, "toastMsg");
                toast(toastMsg)
            }

        } catch (error) { }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Facilities management courses in uae | iLap</title>
                <meta
                    name="keywords"
                    content="management training dubai, course uae, certified commercial contracts manager, event planning courses in dubai, uae consultant, communication skills course, facilities management courses"
                />
            </Helmet>

            <div>
                <section className="Home-banner-3  text-white py-5 position-relative">
                    <div className="container d-flex flex-column flex-md-row align-items-center">
                        <div className="col-md-12 text-center  home-header" >
                            <div className="innerbanner-txt ">
                                <h1 className="fw-bold text-center display-5  font-51">{translateSync('Register')}</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div class="rbt-elements-area bg-color-white rbt-section-gap">
                        <Formik
                            initialValues={{
                                userName: '',
                                email: '',
                                mobileNumber: '',
                                country: '',
                                preferredLanguage: '',
                                password: '',
                                confirmPassword: '',
                                acceptTerms: false
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={values => {
                                formSubmit(values)
                            }}
                        >
                            {({ errors, touched, handleChange, handleBlur, values }) => (
                                <Form>
                                    <div class="container">
                                        <div class="row gy-5 row--30">
                                            <div class="col-lg-6">
                                                <div className="signupimg">
                                                    <img src='/img/contact-img.jpg'></img>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                                                    <h3 class="title text-center">{translateSync('Register')}</h3>

                                                    <div class="">
                                                        <input
                                                            className='form-control'
                                                            name="userName"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Username ')}
                                                            type="text"
                                                        />
                                                        {errors.userName && touched.userName && <div className="error_msg">{errors.userName}</div>}
                                                        <br></br>
                                                    </div>
                                                    <div class="">
                                                        <input
                                                            className='form-control'
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Email address ')}
                                                            type="text"
                                                        />
                                                        {errors.email && touched.email && <div className="error_msg">{errors.email}</div>}
                                                        <br></br>
                                                    </div>
                                                    <div class="">
                                                        <input
                                                            className='form-control'
                                                            name="mobileNumber"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Mobile Number')}
                                                            type="text"
                                                        />
                                                        {errors.mobileNumber && touched.mobileNumber && <div className="error_msg">{errors.mobileNumber}</div>}
                                                        <br></br>
                                                    </div>

                                                    <div class="">
                                                        <select
                                                            className='form-control'
                                                            name="country"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Select Country')}
                                                        >
                                                            <option value="">{translateSync('Select Country')} *</option>
                                                            {countries.map((country) => (
                                                                <option key={country.isoCode} value={country.name}>
                                                                    {translateSync(country.name)}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {errors.country && touched.country && <div className="error_msg">{errors.country}</div>}
                                                        <br></br>
                                                    </div>

                                                    <div class="">
                                                        <select
                                                            className='form-control'
                                                            name="preferredLanguage"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Select Preferred Language')}
                                                        >
                                                            <option value="">{translateSync('Select Preferred Language')} *</option>
                                                            <option value="English">English</option>
                                                            <option value="Arabic">Arabic</option>
                                                        </select>
                                                        {errors.preferredLanguage && touched.preferredLanguage && <div className="error_msg">{errors.preferredLanguage}</div>}
                                                        <br></br>
                                                    </div>

                                                    <div class="">
                                                        <input
                                                            className='form-control'
                                                            name="password"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync("Password *")}
                                                            type="password"
                                                        />
                                                        {errors.password && touched.password && <div className="error_msg">{errors.password}</div>}
                                                        <br></br>
                                                    </div>

                                                    <div class="">
                                                        <input
                                                            className='form-control'
                                                            name="confirmPassword"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder={translateSync('Confirm Password')}
                                                            type="password"
                                                        />
                                                        {errors.confirmPassword && touched.confirmPassword && <div className="error_msg">{errors.confirmPassword}</div>}
                                                        <br></br>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="d-flex align-items-center">
                                                            <input
                                                                type="checkbox"
                                                                id="acceptTerms"
                                                                name="acceptTerms"
                                                                checked={values.acceptTerms}
                                                                onChange={handleChange}
                                                                className="mr-2"
                                                            />
                                                            <label htmlFor="acceptTerms" className="mb-0 ml-2">
                                                                <span className="regnavicon">{translateSync('I accept the terms')}</span>
                                                            </label>
                                                        </div>

                                                        <div className="ml-4 mt-2">
                                                            <span>
                                                                {translateSync('By creating an account, you agree to the')}{' '}
                                                                <span
                                                                    className="regnavicon"
                                                                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                                    onClick={() => navigate('/terms')}
                                                                >
                                                                    {translateSync('Terms of Service')}
                                                                </span>{' '}
                                                                {translateSync('and')}{' '}
                                                                <span
                                                                    className="regnavicon"
                                                                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                                    onClick={() => navigate('/privacy')}
                                                                >
                                                                    {translateSync('Privacy Policy')}
                                                                </span>.
                                                            </span>
                                                        </div>

                                                        {errors.acceptTerms && touched.acceptTerms && (
                                                            <div className="error_msg">{errors.acceptTerms}</div>
                                                        )}
                                                    </div>


                                                    <div class="form-submit-group">
                                                        <button
                                                            type="submit"
                                                            className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                                                            disabled={!values.acceptTerms}
                                                        >

                                                            <span class="icon-reverse-wrapper">
                                                                <span class="btn-text">{translateSync('Register')}</span>
                                                                <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                                                <span class="btn-icon"><i class="feather-arrow-right"></i></span>
                                                            </span>
                                                        </button>
                                                    </div>

                                                    <br></br>
                                                    <p className='text-center' >{translateSync('Already have an account?')} <span className='regnavicon' onClick={() => navigate("/login")}> {translateSync('Login')}.</span></p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4"></div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>
            </div>
        </>
    )
}

export default RegisterPage;