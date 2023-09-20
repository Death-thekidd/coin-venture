import { useSelector } from "react-redux";
import images from "../constants/images";
import { useForm } from "react-hook-form";
import {
	useApproveDepositMutation,
	useChangeBalanceMutation,
	useGetUsersQuery,
} from "../features/api/Auth/authApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const selectState = (state: any) => state.user;

const User = () => {
	const { user, userWallets } = useSelector(selectState);
	const { userId } = useParams();
	const { register, handleSubmit, getValues } = useForm();
	const [userData, setUserData] = useState<any>({});
	const { isLoading, isSuccess, data } = useGetUsersQuery("");
	const [
		approveDeposit,
		{ isLoading: Loading, isSuccess: Success, isError: Error },
	] = useApproveDepositMutation();
	const [
		changeBalance,
		{ isLoading: Loading_, isSuccess: Success_, isError: Error_ },
	] = useChangeBalanceMutation();
	const submitForm = () => {};
	useEffect(() => {
		if (isSuccess) {
			console.log(data);
			setUserData(data.find((item: any) => item._id == userId));
		}
	}, [isLoading, isSuccess, data, userId]);
	useEffect(() => {
		if (Success) {
			toast.success("Deposit approved");
			setUserData(data.find((item: any) => item._id == userId));
		}
		if (Error) {
			toast.error("Deposit Approval failed", {
				position: "top-right",
			});
		}
	}, [Loading, Success, Error, userId, data]);

	useEffect(() => {
		if (Success_) {
			toast.success("Balance Changed");
			setUserData(data.find((item: any) => item._id == userId));
		}
		if (Error_) {
			toast.error("Balance change failed", {
				position: "top-right",
			});
		}
	}, [Loading_, Success_, Error_, userId, data]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">{"User"}</div>
					<div
						className="col-lg-12 col-md-6 wow fadeInLeft"
						data-wow-duration="0.6"
					>
						<div className="featured-item style-3">
							<div className="featured-icon">
								<img className="img-center" src={images.feature_8} alt="" />
							</div>
							<div className="featured-title">
								<h5>{(userData as any)?.username}</h5>
							</div>
							<div className="featured-desc">
								<p>{`Email: ${(userData as any)?.email}`}</p>
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
									<h6>${userData?.balance}</h6>
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
									<h6>${userData?.activeDeposit}</h6>
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
									<h6>${userData?.totalDeposit}</h6>
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
									<h6>${userData.activeDeposit}</h6>
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
					<br />
					<div className="post-date">{"User Wallets: "}</div>
					<table cellSpacing="0" cellPadding="0" width="100%">
						<tr>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }}></td>
							<td
								height="40"
								style={{ backgroundColor: "#f7f9fe" }}
								align="left"
							>
								<b>Processing</b>
							</td>
							<td
								height="40"
								style={{ backgroundColor: "#f7f9fe" }}
								align="center"
							>
								<b>Available</b>
							</td>
							<td
								height="40"
								style={{ backgroundColor: "#f7f9fe" }}
								align="center"
							>
								<b>Pending</b>
							</td>
							<td
								height="40"
								style={{ backgroundColor: "#f7f9fe" }}
								align="center"
							>
								<b>Account</b>
							</td>
						</tr>
						{userWallets?.map((wallet: any, index: any) => (
							<tr key={index}>
								<td height="40" style={{ paddingLeft: "10px" }}></td>
								<td height="40" align="left">
									<img
										src={images[wallet.name as keyof typeof images]}
										width="44"
										height="17"
									/>{" "}
									{wallet.name}
								</td>
								<td height="40" align="center">
									<span style={{ color: "green" }}>
										${wallet?.available}.00
									</span>
								</td>
								<td height="40" align="center">
									<span style={{ color: "red" }}>${wallet?.pending}.00</span>
								</td>
								<td height="40" align="center">
									{wallet?.address ? (
										<span>{wallet.address}</span>
									) : (
										<a href="?a=edit_account">
											<i>not set</i>
										</a>
									)}
								</td>
							</tr>
						))}
					</table>

					<br />
					<div className="post-date">{"Approve Deposits"}</div>
					<p>
						<form action="">
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tr>
									<td
										height="40"
										style={{ backgroundColor: "#f7f9fe" }}
										align="left"
									>
										<b>Wallet Name</b>
									</td>
									<td
										height="40"
										style={{ backgroundColor: "#f7f9fe" }}
										align="center"
									>
										<b>Amount</b>
									</td>
									<td
										height="40"
										style={{ backgroundColor: "#f7f9fe" }}
										align="center"
									>
										<b>Status</b>
									</td>
									<td
										height="40"
										style={{ backgroundColor: "#f7f9fe" }}
										align="center"
									>
										<b>Action</b>
									</td>
								</tr>
								{data
									?.find((item: any) => item._id == userId)
									?.deposits?.map((row: any) => (
										<tr key={row._id}>
											<td height="40" align="left">
												{row.walletName}
											</td>
											<td height="40" align="center">
												${row.amount}
											</td>
											<td
												style={{
													color: row.status === "approved" ? "green" : "red",
												}}
												height="40"
												align="center"
											>
												{row.status}
											</td>
											<td height="40" align="center">
												<input
													style={{
														background: row.status === "approved" ? "grey" : "",
														cursor: row.status === "pending" ? "pointer" : "",
													}}
													disabled={row.status === "approved" || Loading}
													onClick={() => {
														approveDeposit({
															userToApprove: userData?.username,
															username: user.username,
															depositId: row._id,
														});
													}}
													type="submit"
													value={"Approve"}
													className="sbmt"
												/>
											</td>
										</tr>
									))}
							</table>
						</form>
					</p>
					<br />
					<p>
						<form className="user-balance" onSubmit={handleSubmit(submitForm)}>
							<div className="post-date">{"Change Balance"}</div>
							<input type="number" className="inpts" {...register("amount")} />
							<input
								style={{
									cursor: "pointer",
								}}
								disabled={false}
								type="submit"
								onClick={() => {
									changeBalance({
										type: "increase",
										amount: Number(getValues("amount")),
										userToChange: userData.username,
										username: user.username,
									});
								}}
								value={"Increase"}
								className="sbmt"
							/>
							<input
								style={{
									cursor: "pointer",
								}}
								disabled={false}
								type="submit"
								onClick={() => {
									changeBalance({
										type: "decrease",
										amount: Number(getValues("amount")),
										userToChange: (userData as any).username,
										username: user.username,
									});
								}}
								value={"Decrease"}
								className="sbmt"
							/>
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};
export default User;
