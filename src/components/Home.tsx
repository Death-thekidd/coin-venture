import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import images from "../constants/images";

const Home = () => {
	useEffect(() => {
		// Create a script element
		const script = document.createElement("script");
		script.src = "/vendor/app.js"; // Replace with the path to your script
		script.async = true;

		// Append the script to the document
		document.body.appendChild(script);

		// Cleanup: Remove the script when the component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);
	return (
		<>
			<header className="header position-relative">
				<div className="navigation-bar" id="affix">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light navbar-reset">
							<a className="logo" href="?a=home">
								<img className="logo-default" src={images.logo} alt="Bootbox" />
							</a>
							<button
								className="navbar-toggler border-0 p-0"
								type="button"
								data-toggle="collapse"
								data-target="#theme-navbar"
								aria-controls="theme-navbar"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-lines"></span>
							</button>
							<div className="collapse navbar-collapse" id="theme-navbar">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item">
										<Link className="nav-link" to="/">
											Home
										</Link>
									</li>

									<li className="nav-item">
										<Link className="nav-link" to="/about">
											About
										</Link>
									</li>

									<li className="nav-item">
										<Link className="nav-link" to="/faq">
											FAQs
										</Link>
									</li>

									<li className="nav-item">
										{/* <Link className="nav-link" to="/rules">
											Terms
										</Link> */}
									</li>
									{/* <li className="nav-item">
										<a className="nav-link" href="?a=support">
											Contact Us
										</a>
									</li> */}
									<li className="nav-item">
										<Link className="nav-link" to="/signup">
											Signup
										</Link>
									</li>
								</ul>
								<div className="my-3 my-lg-0">
									<Link to="/login" className="btn btn-custom">
										Login
									</Link>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</header>
			<Outlet />
			<footer className="sp-100-70 bg-gradi counters-section" id="counters">
				<div className="container">
					<div className="footer-top">
						<div className="row">
							<div className="col-md-6 col-xl-3 mb-30">
								<div className="mb-30">
									<img
										className="logo-footer"
										src={images.logo}
										alt="Bootbox"
									/>
								</div>
								<p className="mb-30 c-white">
									We are a leading global investment solutions partner,
									dedicated to improving peoples financial security.
								</p>
								<div className="socials">
									<a href="#" className="zmdi zmdi-facebook"></a>
									<a href="#" className="zmdi zmdi-twitter"></a>
									<a href="#" className="zmdi zmdi-google"></a>
									<a href="#" className="zmdi zmdi-instagram"></a>
								</div>
							</div>
							<div className="col-md-6 col-xl-3 mb-30">
								<h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">
									Our company
								</h4>
								<div className="foot-links">
									<Link to="/">Home</Link>
									<Link to="/about">About Us</Link>

									<Link to="/faq">FAQ</Link>
								</div>
							</div>
							<div className="col-md-6 col-xl-3 mb-30">
								<h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">
									User
								</h4>
								<div className="foot-links">
									{/* <Link to="/rules">Terms</Link> */}
									{/* <Link to="/support">Contact Us</Link> */}
									<Link to="/login">Log In</Link>
									<Link to="/signup">Sign Up</Link>
								</div>
							</div>
							<div className="col-md-6 col-xl-3 mb-30">
								<h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">
									Contact us
								</h4>
								<ul className="contact-info mt-4">
									<li>
										<i className="zmdi zmdi-pin"></i>
										101 Edgware Road, London, W2 2HX
									</li>
									<li>
										<i className="zmdi zmdi-email"></i>
										ceo@coinventure.biz
									</li>
									<li>
										<i className="zmdi zmdi-phone"></i>
										+44 566-7855-637
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="copyright text-center c-white">
						COIN VENTURE LIMITED
						<span className="d-none d-md-inline-block">
							All rights reserved.
						</span>
					</div>
				</div>
			</footer>
			<a id="back-top" className="back-top" href="javascript:void(0)">
				<span className="zmdi zmdi-triangle-up mb-1"></span>
			</a>
		</>
	);
};
export default Home;
