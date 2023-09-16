import { useEffect } from "react";
import images from "../constants/images";
import { Link } from "react-router-dom";

const MainHome = () => {
	useEffect(() => {}, []);
	return (
		<>
			<section className="breadcrumb-section">
				<div className="banner position-relative">
					<div className="container">
						<div className="row align-items-center">
							<div
								className="col-lg-6 col-12 text-lg-left text-center"
								data-wow-delay="0.2s"
							>
								<div className="banner-text">
									<h2 className="c-white mb-3 mb-md-4">
										COIN VENTURE LIMITED RELIABLE INVESTMENT RETURNS{" "}
									</h2>
									<p className="c-white">
										COIN VENTURE helps generate strong investment returns and
										meets long-term goals, We are a leading global investment
										solutions partner, dedicated to improving peoples financial
										security.
									</p>
									<Link
										to="/about"
										className="btn btn-lg btn-custom btn-light mt-4"
									>
										Read About Us
									</Link>
								</div>
							</div>
							<div
								className="col-lg-6 col-12 d-none d-lg-block wow zoomIn"
								data-wow-delay="0.4s"
							>
								<div className="banner-img">
									<img src={images.banner} alt="business" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cta-section position-relative">
				<div className="container">
					<div className="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
						<h3>Start growing with COIN VENTURE today!</h3>
						<p className="mb-30 mx-auto">
							The ability to efficiently implement trades around the clock,
							through our internal trading desk.
						</p>
						<Link to="/signup" className="btn btn-lg btn-custom">
							Join Now <i className="zmdi zmdi-long-arrow-right ml-2"></i>
						</Link>
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
									<img src={images.port1} alt="project" />
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
									<img src={images.port2} alt="project" />
									<div className="proj-overlay">
										<h5>Balancing yield and total return</h5>
										<a href={images.port2} className="pop-btn">
											<i className="zmdi zmdi-zoom-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 port-item mb-30 webdesign graphicdesign">
							<div className="project">
								<div className="proj-img">
									<img src={images.port3} alt="project" />
									<div className="proj-overlay">
										<h5>
											Research & insights From our global team of researchers
											and strategists
										</h5>
										<a href={images.port3} className="pop-btn">
											<i className="zmdi zmdi-zoom-in"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light sp-100-70">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<h2>investment plans</h2>
						</div>

						<div className="tab-content wow fadeIn">
							<div
								role="tabpanel"
								className="tab-pane fade show active"
								id="yearly"
							>
								<div className="row justify-content-center">
									<div className="col-md-6 col-lg-4 mb-30">
										<div className="price-item text-center">
											<div className="">
												<h2>10%</h2>
												<h4 className="mb-0">DAILY FOREVER</h4>
											</div>
											<div className="price-content">
												<ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Daily Profit 10%</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Min $5 - $500</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Instant Payment</span>
													</li>
												</ul>
												<Link to="/signup" className="btn btn-custom">
													Invest Now
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 mb-30">
										<div className="price-item text-center">
											<div className="">
												<h2>12%</h2>
												<h4 className="mb-0">DAILY FOREVER</h4>
											</div>
											<div className="price-content">
												<ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Daily Profit 12%</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Min $500 - $1000</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Instant Payment</span>
													</li>
												</ul>
												<Link to="/signup" className="btn btn-custom">
													Invest Now
												</Link>
											</div>
										</div>
									</div>
									<div className="col-md-6 col-lg-4 mb-30">
										<div className="price-item text-center">
											<div className="">
												<h2>15%</h2>
												<h4 className="mb-0">DAILY FOREVER</h4>
											</div>
											<div className="price-content">
												<ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Daily Profit 15%</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Min $1000 - $100000</span>
													</li>
													<li>
														<i className="zmdi zmdi-check mr-2"></i>
														<span className="c-black">Instant Payment</span>
													</li>
												</ul>
												<Link to="/signup" className="btn btn-custom">
													Invest Now
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="sp-100-70 bg-gradi counters-section" id="counters">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section-title">
								<h3 className="top-c-sep  c-white">
									Some of Company Real Facts
								</h3>
							</div>
						</div>
					</div>
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-3 col-md-6 mb-30">
							<div className="counter-box d-flex d-lg-block">
								<div className="icon-box mb-3"></div>
								<div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
									<h3 className="">5</h3>
									<p className="c-black text-capitalize"> Days Online</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-30">
							<div className="counter-box d-flex d-lg-block">
								<div className="icon-box mb-3"></div>
								<div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
									<h3 className="">509</h3>
									<p className="c-black text-capitalize"> Total Accounts</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-30">
							<div className="counter-box d-flex d-lg-block">
								<div className="icon-box mb-3"></div>
								<div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
									<h3 className="">$ 10452.15</h3>
									<p className="c-black text-capitalize"> Total Deposited</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 mb-30">
							<div className="counter-box d-flex d-lg-block">
								<div className="icon-box mb-3"></div>
								<div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
									<h3 className="">$ 1914.40</h3>
									<p className="c-black text-capitalize">Total Withdrawl</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cta-section position-relative">
				<div className="container">
					<div className="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
						<h3>Investments</h3>
						<div className="columns is-variable is-multiline is-centered">
							<div className="column is-10">
								<br />
								<br />
								<table className="table is-fullwidth is-bordered">
									<thead>
										<tr className="is-selected">
											<th>Username</th>
											<th>Amount</th>

											<th>Currency</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>gildook</td>
											<td>$50.00</td>

											<td>
												<img src={images.gif18} />
											</td>
										</tr>

										<tr>
											<td>nippon</td>
											<td>$5.00</td>

											<td>
												<img src={images.gif43} />
											</td>
										</tr>

										<tr>
											<td>anurak00</td>
											<td>$20.00</td>

											<td>
												<img src={images.gif48} />
											</td>
										</tr>

										<tr>
											<td>Malik</td>
											<td>$5.00</td>

											<td>
												<img src={images.gif18} />
											</td>
										</tr>

										<tr>
											<td>Keangheng</td>
											<td>$5.00</td>

											<td>
												<img src={images.gif43} />
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<br />
						<br />
						<br />
						<h3>Paid Outs</h3>
						<div className="column is-10">
							<br />
							<br />
							<table className="table is-fullwidth is-bordered">
								<thead>
									<tr className="is-selected">
										<th>Username</th>
										<th>Amount</th>

										<th>Currency</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>richgarancom</td>
										<td>$0.25</td>

										<td>
											<img src={images.gif43} />
										</td>
									</tr>

									<tr>
										<td>Nopz999</td>
										<td>$1.50</td>

										<td>
											<img src={images.gif48} />
										</td>
									</tr>

									<tr>
										<td>Vjmero</td>
										<td>$20.00</td>

										<td>
											<img src={images.gif18} />
										</td>
									</tr>

									<tr>
										<td>nongsky</td>
										<td>$0.50</td>

										<td>
											<img src={images.gif18} />
										</td>
									</tr>

									<tr>
										<td>david777</td>
										<td>$0.50</td>

										<td>
											<img src={images.gif43} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<br />{" "}
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
			<section className="cta-section position-relative">
				<div className="container">
					<div className="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
						<h3>REFERRAL COMMISSIONS 5%</h3>
					</div>
				</div>
			</section>
		</>
	);
};
export default MainHome;
