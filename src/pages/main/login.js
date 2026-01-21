import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import './myaccount.css';
import apiProvider from '../../apiProvider/api';
import { Formik, Form } from 'formik';
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
    const { translateSync } = useTranslation();

    const formSubmit = async (data) => {
        try {
            const input = { email: data.email, password: data.password };
            const result = await apiProvider.login(input);

            if (result && result.status === 200 && result.response) {
                localStorage.setItem('userToken', result.response.token);
                disPatch(login({ token: result.response.data.token }));
                setTimeout(() => {
                    navigate("/");
                }, 1000);
                return;
            }

            if (result?.response?.response?.data?.message) {
                toast.error(result.response.response.data.message, { autoClose: 2000 });
            } else {
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

            if (result && result.status === 200 && result.response) {
                localStorage.setItem('userToken', result.response.token);
                setShowForgotPassword(false)
                toast.success("Password sent successfully!");
            }

            if (result?.response?.response?.data?.message) {
                toast.error(result?.response?.response?.data?.message, { autoClose: 2000 });
            }
        } catch (err) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f8f9fa' }} className="d-flex align-items-center">
            <Helmet>
                <title>Login | Alpha Technical Rubber Products</title>
                <meta name="description" content="Login to access your Alpha Tech account." />
            </Helmet>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 shadow-lg rounded bg-white overflow-hidden">
                        <div className="row">
                            {/* Left Side - Image */}
                            <div className="col-md-6 p-0 d-none d-md-block position-relative bg-dark">
                                <img
                                    src="/img/login-banner.jpg"
                                    onError={(e) => e.target.src = '/img/banner-new-1.png'}
                                    alt="Login Banner"
                                    className="w-100 h-100 object-fit-cover opacity-75"
                                />
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white p-5 text-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                    <h2 className="fw-bold mb-3">Welcome Back</h2>
                                    <p className="lead fs-6">Access your dashboard to manage orders and view technical resources.</p>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="col-md-6 p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold text-primary mb-2">Alpha Tech</h3>
                                    <p className="text-muted small">Industrial Sealing Solutions</p>
                                </div>

                                {showForgotPassword ? (
                                    <>
                                        <h4 className="fw-bold mb-3 text-start text-primary">{translateSync('Forgot Password')}</h4>
                                        <p className="text-muted mb-4 small text-start">Enter your email to receive password reset instructions.</p>
                                        <Formik
                                            initialValues={{ email: '' }}
                                            validationSchema={sendPassword}
                                            onSubmit={sendPasswordFun}
                                        >
                                            {({ errors, touched, handleChange, handleBlur }) => (
                                                <Form>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label small fw-bold">Email Address</label>
                                                        <input
                                                            className={`form-control py-2 ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type="email"
                                                            placeholder="name@example.com"
                                                        />
                                                        {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                                                    </div>

                                                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mt-2" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>
                                                        {translateSync('Send Password')}
                                                    </button>

                                                    <div className="text-center mt-4">
                                                        <button type="button" className="btn btn-link text-decoration-none text-muted small" onClick={() => setShowForgotPassword(false)}>
                                                            Back to Login
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="fw-bold mb-4 text-start text-primary">{translateSync('Login')}</h4>
                                        <Formik
                                            initialValues={{ email: '', password: '' }}
                                            validationSchema={SigninSchema}
                                            onSubmit={formSubmit}
                                        >
                                            {({ errors, touched, handleChange, handleBlur }) => (
                                                <Form>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label small fw-bold">Email Address</label>
                                                        <input
                                                            className={`form-control py-2 ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type="email"
                                                            placeholder="name@example.com"
                                                        />
                                                        {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                                                    </div>

                                                    <div className="mb-3 text-start">
                                                        <label className="form-label small fw-bold">Password</label>
                                                        <input
                                                            className={`form-control py-2 ${errors.password && touched.password ? 'is-invalid' : ''}`}
                                                            name="password"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            type="password"
                                                            placeholder="Enter your password"
                                                        />
                                                        {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}
                                                    </div>

                                                    <div className="d-flex justify-content-end mb-4">
                                                        <button type="button" className="btn btn-link p-0 text-decoration-none small" style={{ color: 'var(--accent-color)' }} onClick={() => setShowForgotPassword(true)}>
                                                            {translateSync('Forgot password?')}
                                                        </button>
                                                    </div>

                                                    <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>
                                                        {translateSync('Log In')}
                                                    </button>

                                                    <div className="text-center mt-4">
                                                        <span className="text-muted small">{translateSync("Don't have an account?")} </span>
                                                        <button type="button" className="btn btn-link p-0 text-decoration-none fw-bold small" style={{ color: 'var(--primary-color)' }} onClick={() => navigate("/register")}>
                                                            {translateSync('Register Now')}
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;