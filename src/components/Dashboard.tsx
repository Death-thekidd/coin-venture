import { useEffect, useRef } from "react";
import images from "../constants/images";
import "./dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation } from "../features/api/Auth/authApiSlice";
import { setUser } from "../features/User/userSlice";

const selector = (state: any) => state.user;

const DashBoard = () => {
	const { user } = useSelector(selector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [logoutUser, {}] = useLogoutUserMutation();

	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [user, navigate]);
	return (
		<>
			<div className="breadcrumb-section">
				<div className="page-content">
					<section>
						<div className="container">
							<div className="row">
								<Outlet />
								<div className="col-lg-3 col-md-12 sidebar order-lg-1 md-mt-5">
									<div className="widget grey-bg px-4 py-4">
										<h5 className="widget-title">
											{user?.isAdmin && "Admin "} Dashboard
										</h5>
										<ul className="widget-categories list-unstyled">
											{user?.isAdmin ? (
												<>
													<li>
														{" "}
														<Link to="/dashboard/users">Users</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/wallets">Wallets</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/plans"> Plans</Link>
													</li>
													<li>
														{" "}
														<Link
															to="/"
															onClick={() => {
																logoutUser("");
																dispatch(setUser(null));
															}}
														>
															Logout
														</Link>
													</li>
												</>
											) : (
												<>
													<li>
														{" "}
														<Link to="/dashboard/account">My Account</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/deposit">Make Deposit</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/history">History</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/withdraw">Withdraw</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/referrals">
															Your Referrals
														</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/edit_account">
															Edit Account
														</Link>
													</li>
													<li>
														{" "}
														<Link
															to="/"
															onClick={() => {
																logoutUser("");
																dispatch(setUser(null));
															}}
														>
															Logout
														</Link>
													</li>
												</>
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<footer
					className="footer white-bg pos-r o-hidden bg-contain"
					data-bg-img={images.pattern_1}
					style={{ marginTop: "100px" }}
				>
					<div className="round-p-animation"></div>
					<div className="primary-footer">
						<div className="container-fluid p-0">
							<div className="row">
								<div className="col-lg-4">
									<div
										className="ht-theme-info bg-contain bg-pos-r dark-bg text-white"
										data-bg-img={images.bg_2}
									>
										<div className="footer-logo">
											<a href="https://coinventure.live">
												<img className="img-center" src={images.logo} alt="" />
											</a>
										</div>
									</div>
								</div>
								<div className="col-lg-8 py-8">
									<div className="row">
										<div className="col-lg-12 col-md-12 footer-list">
											<h4 className="title">We Accept</h4>
											<div className="row">
												<div className="col-sm-12">
													<img
														className="img-center"
														src={images.perfectmoney}
														alt=""
													/>{" "}
													<img
														className="img-center"
														src={images.payeer}
														alt=""
													/>{" "}
													<img
														className="img-center"
														src={images.bitcoin_}
														alt=""
													/>{" "}
													<img
														className="img-center"
														src={images.ethereum_}
														alt=""
													/>{" "}
													<img
														className="img-center"
														src={images.litecoin_}
														alt=""
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="secondary-footer">
						<div className="container">
							<div className="copyright">
								<div className="row align-items-center">
									<div className="col-md-6">
										{" "}
										<span>
											Copyright 2019{" "}
											<a href="https://coinventure.live">
												Coin Venture Investments
											</a>{" "}
											| All Rights Reserved
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>

				<div className="scroll-top">
					<a className="smoothscroll" href="#top">
						<i className="flaticon-upload"></i>
					</a>
				</div>
			</div>
		</>
	);
};
export default DashBoard;
