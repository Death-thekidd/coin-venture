import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/api/Auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Login = () => {
	const userId = localStorage.getItem("coin_venture_uid");
	const { register, handleSubmit } = useForm();
	const location = useLocation();
	const navigate = useNavigate();
	const [loginUser, { isLoading, isError, error, isSuccess, data }] =
		useLoginUserMutation();
	const from = location.state?.from?.pathname || "/dashboard/account";
	const submitForm = (data: any) => {
		console.log(data);
		loginUser(data);
	};
	useEffect(() => {
		if (userId) {
			navigate("/dashboard/account");
		}
	}, [userId, navigate]);
	useEffect(() => {
		if (isSuccess) {
			toast.success("Sign in succesful");
			console.log(data);
			localStorage.setItem("coin_venture_uid", data?.id);
			setTimeout(() => {
				if (data.isAdmin) navigate("/dashboard/users");
				else navigate(from);
			}, 2000);
		}
		if (isError) {
			console.log(error);
			if ((error as any)?.data) {
				toast.error((error as any)?.data?.message, { position: "top-right" });
			} else {
				toast.error("Login Error", {
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
							<div className="login-box bg-white pl-lg-5 pl-0">
								<div className="row no-gutters align-items-center">
									<div className="col-md-6">
										<div className="form-wrap bg-white">
											<h4 className="btm-sep pb-3 mb-5">Login</h4>

											<form className="form" onSubmit={handleSubmit(submitForm)}>
												<div className="row">
													<div className="col-12">
														<div className="form-group position-relative">
															<span className="zmdi zmdi-account"></span>
															<input
																type="text"
																className="form-control"
																placeholder="Username"
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
													<div className="col-12 text-lg-right">
														<a href="?a=forgot_password" className="c-black">
															Forgot password ?
														</a>
													</div>
													<div className="col-12 mt-30">
														<input
															type="submit"
															value="Sign In"
															className="btn btn-lg btn-custom btn-dark btn-block"
														/>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6">
										<div className="content text-center">
											<div className="border-bottom pb-5 mb-5">
												<h3 className="c-black">First time here?</h3>
												<Link to="/signup/0" className="btn Sibtn-custom">
													Sign up
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

export default Login;
