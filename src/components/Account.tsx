import { useSelector } from "react-redux";
import images from "../constants/images";
import { toast } from "react-toastify";

const selectState = (state: any) => state.user;

const Account = () => {
	const { user } = useSelector(selectState);
	return (
		<>
			<div className="col-lg-9 col-md-12 order-lg-12">
				<div className="post">
					<div className="post-desc">
						<div className="post-date">My Account</div>

						<div
							className="col-lg-12 col-md-6 wow fadeInLeft"
							data-wow-duration="0.6"
						>
							<div className="featured-item style-3">
								<div className="featured-icon">
									<img className="img-center" src={images.feature_8} alt="" />
								</div>
								<div className="featured-title">
									<h5>{user?.username}</h5>
								</div>
								<div className="featured-desc">
									<p>Registration Date: Dec-4-2019</p>
									<p
										onClick={async () => {
											try {
												await navigator.clipboard.writeText(
													`https://detroininvestments.live/modal/register/${user?.referralCode}`
												);
												toast.success("Link copied to clipboard");
											} catch (err) {
												console.log("Failed to copy text: ", err);
											}
										}}
									>
										{`Referral Link: https://detroininvestments.live/register/${user?.referralCode}`}
									</p>
								</div>
							</div>
						</div>
						<br />

						<div className="row">
							<div
								className="col-lg-4 col-md-6 wow fadeInLeft"
								data-wow-duration="0.6"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_1} alt="" />
									</div>
									<div className="featured-title">
										<h6>Account Balance</h6>
										<h6>${user?.balance}</h6>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 sm-mt-5 wow fadeInUp"
								data-wow-duration="0.8"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_5} alt="" />
									</div>
									<div className="featured-title">
										<h6>Active Deposit</h6>
										<h6>${user?.activeDeposit}</h6>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 md-mt-5 wow fadeInRight"
								data-wow-duration="0.8"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_6} alt="" />
									</div>
									<div className="featured-title">
										<h6>Total Deposit</h6>
										<h6>${user?.totalDeposit}</h6>
									</div>
								</div>
							</div>

							<div
								className="col-lg-4 col-md-6 sm-mt-5 wow fadeInUp"
								data-wow-duration="0.8"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_3} alt="" />
									</div>
									<div className="featured-title">
										<h6>Last Deposit</h6>
										<h6>${user.activeDeposit}</h6>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 sm-mt-5 wow fadeInUp"
								data-wow-duration="0.8"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_2} alt="" />
									</div>
									<div className="featured-title">
										<h6>Last Withdrawal</h6>
										<h6>$0.00</h6>
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-6 sm-mt-5 wow fadeInUp"
								data-wow-duration="0.8"
							>
								<div className="featured-item text-center">
									<div className="featured-icon">
										<img className="img-center" src={images.feature_7} alt="" />
									</div>
									<div className="featured-title">
										<h6>Withdraw Total</h6>
										<h6>$0.00</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Account;
