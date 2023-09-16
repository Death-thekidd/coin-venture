import { Link } from "react-router-dom";
import images from "../constants/images";

const Faq = () => {
	return (
		<>
			<section className="breadcrumb-section">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center">
							<h2 className="text-uppercase mb-4 c-white">
								Frequently Asked Questions
							</h2>
							<ul className="breadcrumb mb-0 justify-content-center">
								<li className="breadcrumb-item">
									<Link to="/">Home</Link>
								</li>
								<li className="breadcrumb-item active">FAQ</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-white sp-100-70">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div id="accordion" className="theme-accordion">
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc1"
									>
										<h5 className="mb-0">
											<button
												className="btn
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse1"
												aria-expanded="true"
												aria-controls="collapse1"
											>
												How can I become an investor of the Coin Venture
												Limited?
											</button>
										</h5>
									</div>

									<div
										id="collapse1"
										className="collapse show"
										aria-labelledby="acc1"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>
												Firstly, you must register. Fill out the registration
												form. We recommend you to specify only true data. Create
												a login, a password and specify your email. You can log
												in your profile and use all services of the website: to
												specify payment details, credit the account, choose the
												investment plan, make a deposit, etc.
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc2"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse2"
												aria-expanded="true"
												aria-controls="collapse2"
											>
												Can I verify my information in my profile at any time?
											</button>
										</h5>
									</div>
									<div
										id="collapse2"
										className="collapse"
										aria-labelledby="acc2"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>Yes, the information is available 24/7. </p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc4"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse4"
												aria-expanded="true"
												aria-controls="collapse4"
											>
												How can I withdraw my profit?
											</button>
										</h5>
									</div>
									<div
										id="collapse4"
										className="collapse"
										aria-labelledby="acc4"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>
												Depending on the investment plan you chose, the profit
												is formed from the accrual percent and deposit. As soon
												as funds are credited to your personal account, you can
												request to withdraw them or create a new deposit by
												using your personal account. The money will be Instant
												sent to your wallet of the electronic payment system you
												used to make a deposit. The funds accrued according to
												the affiliate program are available for immediate
												withdrawal.
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												What electronic payment systems can I use for financial
												operations?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>
												We work with the following electronic payment systems:
												Perfect Money, Payeer. BTC. LTC. DOGE. ETH. BCH and
												other coming soon.
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												What is the minimum amount to withdraw?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>
												The minimum amount to withdraw from the account is $0.1,
												for crypto-currency payment systems is 2.5$.
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												How much time does it take my wallet in the electronic
												payment system to be credited with funds after the
												request to withdraw them?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>Payments are made Instant.</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												Do you have an affiliate program?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>Yes. 5% Referral Commissions</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												I forgot the password from my profile. What shall I do?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>
												It is easy to recover a password. In order to do it, get
												in the category “Password Recovery” and enter the data
												specified during the registration. After that the
												project administration will send a link for the password
												recovery will be sent to the email specified by you when
												registering.
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 mb-30">
									<div
										className="card-header bg-white border-bottom-0 p-0"
										id="acc3"
									>
										<h5 className="mb-0">
											<button
												className="btn collapsed
                         position-relative text-decoration-none w-100 text-left"
												data-toggle="collapse"
												data-target="#collapse3"
												aria-expanded="true"
												aria-controls="collapse3"
											>
												Are there any commissions for crediting/withdrawing
												monetary funds?
											</button>
										</h5>
									</div>
									<div
										id="collapse3"
										className="collapse"
										aria-labelledby="acc3"
										data-parent="#accordion"
									>
										<div className="card-body">
											<p>No, we do not charge any hidden commissions. </p>
										</div>
									</div>
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
export default Faq;
