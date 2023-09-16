import { Link } from "react-router-dom";
import images from "../constants/images";

const About = () => {
	return (
		<>
			<section className="breadcrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<h2 className="text-uppercase mb-4 c-white">About us</h2>
							<ul className="breadcrumb mb-0 justify-content-center">
								<li className="breadcrumb-item">
									<Link to="/">Home</Link>
								</li>
								<li className="breadcrumb-item active">About us</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light sp-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-12">
							<h5 className="subtitle-left">ABOUT US</h5>
							<h3>
								We are a leading global investment solutions partner, dedicated
								to improving peoples financial security.
							</h3>
							<p className="mb-30">
								Learn all about who we are, where we began, and how our
								investment approach puts the worlds leading investment managers
								to work for you.{" "}
							</p>
							<p className="mb-30">
								We have the ability to respond quickly and insightfully. With
								professionals in every major timezone, we monitor investment
								markets day and night. When it’s time to act, our internal
								trading desk can implement trades around the clock—potentially
								protecting portfolios before local operations start their day.
							</p>
							<ul className="list-one">
								<li>Monitoring investment markets day and night.</li>
								<li>A robust process to help ensure decisions are sound.</li>
								<li>
									The ability to efficiently implement trades around the clock,
									through our internal trading desk.
								</li>
							</ul>
						</div>
						<div className="col-lg-6 col-12 d-none d-lg-block wow zoomIn pl-5">
							<div className="about-page-img">
								<img src={images.about} className="img-fluid" alt="Business" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white sp-100-70">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title">
								<h3 className="top-c-sep">OUR TEAM</h3>
								<p></p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team1} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Devian</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team2} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Agatha</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team3} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Christina</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team4} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Bardon</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team5} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Jimmy</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 mb-30">
							<div className="team-item">
								<div className="mb-30 position-relative d-flex align-items-center">
									<span className="socials d-inline-block"></span>
									<span className="img-holder d-inline-block">
										<img src={images.team6} alt="Team" />
									</span>
								</div>
								<div className="team-content">
									<h5 className="mb-2">Fulton</h5>
									<p className="text-uppercase mb-0"></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cta-section position-relative">
				<div className="container">
					<div className="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
						<h5>officially registered company in the United Kingdom</h5>
						<p className="mb-30 mx-auto"></p>
						<a
							href="https://beta.companieshouse.gov.uk/company/05462356"
							className="btn btn-lg btn-custom"
						>
							Check Now <i className="zmdi zmdi-long-arrow-right ml-2"></i>
						</a>
					</div>
				</div>
			</section>
			<section className="project-section bg-w sp-100-70">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title title-left text-center text-lg-left">
								<h3 className="top-sep"></h3>
								<p></p>
							</div>
						</div>
					</div>
					<div className="row d-none d-md-flex">
						<div className="col-12">
							<ul className="sorting mb-60"></ul>
						</div>
					</div>
					<div className="row masonary-wrap">
						<div className="col-lg-4 col-md-6 col-12 port-item mb-30 webdesign digitalmarketing">
							<div className="project">
								<div className="proj-img">
									<div className="proj-overlay">
										<h5>
											Sourcing key investment ideas designed to deliver real
											value
										</h5>
										<a href={images.port1} className="pop-btn">
											<i className="zmdi zmdi-zoom-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 port-item mb-30 seo graphicdesign">
							<div className="project">
								<div className="proj-img">
									<img src={images.us} alt="project" />
									<div className="proj-overlay" />
									<h5>Company Registered</h5>
									<a href={images.crt} className="btn btn-lg btn-custom">
										Certificate{" "}
										<i className="zmdi zmdi-long-arrow-right ml-2"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12 port-item mb-30 webdesign graphicdesign">
						<div className="project">
							<div className="proj-img">
								<div className="proj-overlay">
									<h5>
										Research & insights From our global team of researchers and
										strategists
									</h5>
									<a href={images.port3} className="pop-btn">
										<i className="zmdi zmdi-zoom-in"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="sp-100 bg-white clients-section">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="text-left mb-60">
								<h3 className="title-right">Payment Methods</h3>
							</div>
						</div>
					</div>
					<div className="client-slider" id="client-slider">
						<div className="item">
							<img src={images.client1} alt="client 1" />
						</div>
						<div className="item">
							<img src={images.client2} alt="client 2" />
						</div>
						<div className="item">
							<img src={images.client3} alt="client 3" />
						</div>
						<div className="item">
							<img src={images.client4} alt="client 4" />
						</div>
						<div className="item">
							<img src={images.client5} alt="client 5" />
						</div>
						<div className="item">
							<img src={images.client6} alt="client 6" />
						</div>
						<div className="item">
							<img src={images.client7} alt="client 7" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default About;
