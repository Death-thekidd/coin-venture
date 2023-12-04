import { useEffect } from "react";
import "./dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	useGetUserQuery,
	useLogoutUserMutation,
} from "../features/api/Auth/authApiSlice";
import { setUser } from "../features/User/userSlice";

const selector = (state: any) => state.user;

const DashBoard = () => {
	const userId = localStorage.getItem("coin_venture_uid");
	const { data } = useGetUserQuery(userId);
	const { user } = useSelector(selector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [logoutUser, {}] = useLogoutUserMutation();

	useEffect(() => {
		dispatch(setUser(data));
	}, [data]);

	useEffect(() => {
		if (!userId) {
			navigate("/");
		}
	}, [userId, navigate]);
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
																localStorage.removeItem("coin_venture_uid");
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
														<Link to="/dashboard/referrals">Your Referrals</Link>
													</li>
													<li>
														{" "}
														<Link to="/dashboard/edit_account">Edit Account</Link>
													</li>
													<li>
														{" "}
														<Link
															to="/"
															onClick={() => {
																logoutUser("");
																dispatch(setUser(null));
																localStorage.removeItem("coin_venture_uid");
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
