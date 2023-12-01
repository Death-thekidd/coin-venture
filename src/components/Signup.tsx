import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRegisterUserMutation } from "../features/api/Auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const selector = (state: any) => state.user;

const Signup = () => {
	const { referralCode } = useParams();
	const { route, user } = useSelector(selector);
	console.log(route);
	const { register, handleSubmit } = useForm();
	const location = useLocation();
	const navigate = useNavigate();
	const [registerUser, { isLoading, isError, error, isSuccess }] =
		useRegisterUserMutation();
	const from = location.state?.from?.pathname || "/login";
	const submitForm = (data: any) => {
		console.log(data);
		console.log({ ...data, roles: ["user"], referralCode: referralCode });
		registerUser({ ...data, roles: ["user"], referralCode: referralCode });
	};
	useEffect(() => {
		if (user) {
			navigate("/dashboard/account");
		}
	}, [user, navigate]);
	useEffect(() => {
		if (isSuccess) {
			toast.success("You succesfully registered");
			setTimeout(() => {
				navigate(from, { state: { background: route } });
			}, 2000);
		}
		if (isError) {
			console.log(error);
			if ((error as any)?.data) {
				toast.error((error as any)?.data.message, { position: "top-right" });
			} else {
				toast.error("Registration failed", {
					position: "top-right",
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);
	return (
		<>
			<section className="bg-gradi sp-100 login-section overflow-hidden d-flex align-items-center min-vh-100">
				<div className="container">
					<div className="row">
						<div className="col-md-11 mt-60 mx-md-auto">
							<div className="login-box bg-white pr-lg-5 pr-0">
								<div className="row no-gutters align-items-center">
									<div className="col-md-6 order-md-last">
										<div className="form-wrap bg-white">
											<h4 className="btm-sep pb-3 mb-5">Register</h4>

											<form onSubmit={handleSubmit(submitForm)} className="form">
												<div className="row">
													/;
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-account"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Your Full Name"
																{...register("fullname", { required: true })}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-account"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Your Username"
																{...register("username", { required: true })}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-key"></span>
															<input
																type="password"
																className="form-control"
																placeholder="Password"
																{...register("password", { required: true })}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-key"></span>
															<input
																type="password"
																name="password2"
																className="form-control"
																placeholder="Retype Password"
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-lock"></span>
															<input
																type="text"
																data-validate="regexp"
																data-validate-regexp="^P\d{5,}$"
																data-validate-notice="PXXXXXXX"
																className="form-control"
																placeholder="Your Payeer Account"
																{...register("payeer")}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-lock"></span>
															<input
																type="text"
																data-validate="regexp"
																data-validate-regexp="^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$"
																data-validate-notice="Bitcoin Address"
																className="form-control"
																placeholder="Your Bitcoin Account"
																{...register("bitcoin")}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-lock"></span>
															<input
																type="text"
																data-validate="regexp"
																data-validate-regexp="^[LM3][a-km-zA-HJ-NP-Z1-9]{25,34}$"
																data-validate-notice="Litecoin Address"
																className="form-control"
																placeholder="Your Litecoin Account"
																{...register("litecoin")}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-lock"></span>
															<input
																type="text"
																data-validate="regexp"
																data-validate-regexp="^(0x)?[0-9a-fA-F]{40}$"
																data-validate-notice="Ethereum Address"
																className="form-control"
																placeholder="Your Ethereum Account"
																{...register("ethereum")}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-lock"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Your Usdt Account"
																{...register("usdt_trc", { required: true })}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-email"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Email Address"
																{...register("email", { required: true })}
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-email"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Retype Email Address"
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-account"></span>
															<input
																type="text"
																value={referralCode}
																className="form-control"
																placeholder="Your Upline"
																disabled
															/>
														</div>
													</div>
													<div className="col-12">
														<input type="checkbox" name="agree" value="1" /> I agree with{" "}
														<a href="?a=rules">Terms and conditions</a>
														<input
															type="submit"
															value="Sign Up"
															className="btn btn-lg btn-custom btn-dark btn-block"
														/>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6 order-md-first">
										<div className="content text-center">
											<div className="border-bottom pb-5 mb-5">
												<h3 className="c-black">Already have an account?</h3>
												<Link to="/login" className="btn btn-custom">
													sign In
												</Link>
											</div>
											<h5 className="c-black mb-4 mt-n1"></h5>
											<div className="socials">
												<a href="#" className="zmdi zmdi-facebook"></a>
												<a href="#" className="zmdi zmdi-twitter"></a>
												<a href="#" className="zmdi zmdi-google"></a>
												<a href="#" className="zmdi zmdi-instagram"></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Signup;
