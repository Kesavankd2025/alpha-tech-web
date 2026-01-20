import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import './myaccount.css';
import apiProvider from '../../apiProvider/api';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/authSlice'
import { ToastContainer, toast } from 'react-toastify';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from "../../context/TranslationContext";



const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const sendPassword = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const LoginPage = () => {

    const navigate = useNavigate();
    const disPatch = useDispatch()
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const { translateSync, currentLanguage, setCurrentLanguage } = useTranslation();


    const formSubmit = async (data) => {
        try {
            const input = { email: data.email, password: data.password };
            const result = await apiProvider.login(input);
            console.log(result, "resss");

            if (result && result.status === 200 && result.response) {
                localStorage.setItem('userToken', result.response.token);
                disPatch(login({ token: result.response.data.token }));



                setTimeout(() => {
                    navigate("/");
                }, 3000); // Redirect after 3 seconds

                return; // Stop execution to prevent error toast from triggering
            }

            // Check for error message and show toast
            if (result?.response?.response?.data?.message) {
                console.log("if", result?.response?.response?.data.message);
                let measge = result.response.response.data.message
                toast.error(measge, {
                    autoClose: 2000,
                });

            } else {
                console.log("else");

                toast.error("Login failed. Please try again.");
            }
        } catch (err) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    const sendPasswordFun = async (data) => {
        try {
            const input = { email: data.email };
            const result = await apiProvider.forGetPasword(input);
            console.log(result, "resss forget-password");

            if (result && result.status === 200 && result.response) {
                localStorage.setItem('userToken', result.response.token);
                // disPatch(login({ token: result.response.data.token }));
                setShowForgotPassword(false)

                // return; // Stop execution to prevent error toast from triggering
            }

            // Check for error message and show toast
            if (result?.response?.response?.data?.message) {
                toast.error(result?.response?.response?.data?.message, {
                    autoClose: 2000,
                });
            }
        } catch (err) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <Helmet>
                <title>Financial management course | iLap</title>
                <meta
                    name="keywords"
                    content="public training courses, certified facility manager course in dubai, consulting coaching training, admin courses, business training classes, training courses in dubai, safety course, pmp course in abu dhabi"
                />

            </Helmet>
            <div>
                <section className="Home-banner-3  text-white py-5 position-relative">
                    <div className="container d-flex flex-column flex-md-row align-items-center">
                        <div className="col-md-12 text-center  home-header" >
                            <div className="innerbanner-txt ">
                                <h1 className="fw-bold text-center display-5  font-51">{translateSync('Login')}</h1>
                                {/* <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html" title="" itemprop="url">About</a></li>
                                    <li class="breadcrumb-item active">Our Facilitators</li>
                                </ol> */}
                            </div>
                        </div>
                    </div>
                </section>







                <section className="py-5">
                    <div class="rbt-elements-area bg-color-white rbt-section-gap">

                        <div class="container">
                            <div class="row gy-5 row--30">
                                <div class="col-lg-6">
                                    <div className="signupimgg">
                                        <img src='/img/contact-imgg.png'></img>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="loginpageareaa">
                                        {showForgotPassword ?
                                            <>
                                                <Formik
                                                    initialValues={{
                                                        email: '',
                                                    }}
                                                    validationSchema={sendPassword}
                                                    onSubmit={values => {
                                                        sendPasswordFun(values)
                                                    }}
                                                >
                                                    {({ errors, touched, handleChange, handleBlur }) => (
                                                        <Form >
                                                            <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                                                                <h3 class="title text-center">{translateSync('Forgot Password')}</h3>
                                                                <div class="">
                                                                    <input
                                                                        className='form-control'
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder={translateSync('Email')}
                                                                        type="email"
                                                                    />

                                                                    {/* <span class="focus-border"></span> */}
                                                                    {errors.email && touched.email && <div className="error_msg">{errors.email}</div>}
                                                                    <br></br>
                                                                </div>

                                                                <br></br>

                                                                <div class="form-submit-group">
                                                                    <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100" >
                                                                        <span class="icon-reverse-wrapper">
                                                                            <span class="btn-text">{translateSync('Send Password')}</span>

                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                {/* </form> */}
                                                                <br></br>
                                                                <p className='text-center rbt-btn-link' >{translateSync("Don't have an account?")}' <span className='regnavicon' onClick={() => navigate("/register")}>{translateSync('Register Now')} !</span></p>

                                                            </div>

                                                        </Form>
                                                    )}
                                                </Formik>
                                            </>
                                            :
                                            <>
                                                <Formik
                                                    initialValues={{
                                                        email: '',
                                                        password: '',
                                                    }}
                                                    validationSchema={SigninSchema}
                                                    onSubmit={values => {
                                                        formSubmit(values)
                                                    }}
                                                >
                                                    {({ errors, touched, handleChange, handleBlur }) => (
                                                        <Form >
                                                            <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                                                                <h3 class="title text-center">{translateSync('Login')}</h3>
                                                                <div class="">
                                                                    <input
                                                                        className='form-control'
                                                                        name="email"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder={translateSync('Email')}
                                                                        type="email"
                                                                    />

                                                                    {/* <span class="focus-border"></span> */}
                                                                    {errors.email && touched.email && <div className="error_msg">{errors.email}</div>}
                                                                    <br></br>

                                                                </div>
                                                                <div class="">
                                                                    <input
                                                                        className='form-control'
                                                                        name="password"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder={translateSync('Password ')}
                                                                        type="password"
                                                                    />
                                                                    {errors.password && touched.password && <div className="error_msg">{errors.password}</div>}
                                                                    <br></br>

                                                                    {/* <span class="focus-border"></span> */}
                                                                </div>

                                                                {/* Forgot Password Link */}
                                                                <div className="rbt-lost-password text-end">
                                                                    <a
                                                                        className="rbt-btn-link"
                                                                        href="#"
                                                                        onClick={() => setShowForgotPassword(true)}
                                                                    >
                                                                        {translateSync('Forgot your password?')}
                                                                    </a>
                                                                </div>
                                                                <br></br>

                                                                <div class="form-submit-group">
                                                                    <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100" >
                                                                        <span class="icon-reverse-wrapper">
                                                                            <span class="btn-text">{translateSync('Log In')}</span>

                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                {/* </form> */}
                                                                <br></br>
                                                                <p className='text-center rbt-btn-link'  onClick={() => navigate("/register")}>{translateSync("Don't have an account? Register Now !")}'
                                                                     {/* <span className='regnavicon'>{translateSync('Register Now !')}</span> */}
                                                                     </p>

                                                            </div>

                                                        </Form>
                                                    )}
                                                </Formik>
                                            </>
                                        }




                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </section>

                <ToastContainer />










            </div>

        </>
    )
}

export default LoginPage;