import { useSelector } from "react-redux";
import images from "../constants/images";
import { Controller, useForm } from "react-hook-form";
import {
	useApproveDepositMutation,
	useCancelWithdrawalMutation,
	useApproveWithdrawalMutation,
	useChangeBalanceMutation,
	useGetUsersQuery,
	useUpdateUserMutation,
} from "../features/api/Auth/authApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const selectState = (state: any) => state.user;

const User = () => {
	const { user, userWallets } = useSelector(selectState);
	const { userId } = useParams();
	const { register, handleSubmit, getValues } = useForm();
	const {
		register: registerEdit,
		handleSubmit: handleSubmitEdit,
		control: controlEdit,
	} = useForm();
	const [userData, setUserData] = useState<any>({});
	const { isLoading, isSuccess, data } = useGetUsersQuery("");
	const [
		approveDeposit,
		{ isLoading: Loading, isSuccess: Success, isError: Error },
	] = useApproveDepositMutation();
	const [
		cancelWithdrawal,
		{
			isLoading: LoadingWithdrawal,
			isSuccess: SuccessWithdrawal,
			isError: ErrorWithdrawal,
		},
	] = useCancelWithdrawalMutation();
	const [
		approveWithdrawal,
		{
			isLoading: LoadingWithdrawal_,
			isSuccess: SuccessWithdrawal_,
			isError: ErrorWithdrawal_,
		},
	] = useApproveWithdrawalMutation();
	const [
		changeBalance,
		{ isLoading: Loading_, isSuccess: Success_, isError: Error_ },
	] = useChangeBalanceMutation();
	const [
		updateUser,
		{ isLoading: isLoadingUpdate, isError, error, isSuccess: isSuccessUpdate },
	] = useUpdateUserMutation();
	const onSubmit = (data: any) => {
		// Update the address property of each wallet object in the user data
		const updatedUserData = {
			...userData,
			wallets: userData.wallets.map((wallet: any, index: any) => ({
				...wallet,
				address: data.wallets[index].address,
			})),
		};
		console.log(updatedUserData);
		updateUser(updatedUserData);
	};
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
		if (SuccessWithdrawal) {
			toast.success("Withdrawal cancelled");
			setUserData(data.find((item: any) => item._id == userId));
		}
		if (ErrorWithdrawal) {
			toast.error("Withdrawal Cancel failed", {
				position: "top-right",
			});
		}
	}, [LoadingWithdrawal, SuccessWithdrawal, ErrorWithdrawal, userId, data]);
	useEffect(() => {
		if (SuccessWithdrawal_) {
			toast.success("Withdrawal Approved");
			setUserData(data.find((item: any) => item._id == userId));
		}
		if (ErrorWithdrawal_) {
			toast.error("Withdrawal Approval failed", {
				position: "top-right",
			});
		}
	}, [LoadingWithdrawal_, SuccessWithdrawal_, ErrorWithdrawal_, userId, data]);

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
	useEffect(() => {
		if (isSuccessUpdate) {
			toast.success("Update succesful");
		}
		if (isError) {
			console.log(error);
			if (error) {
				toast.error(error as any, { position: "top-right" });
			} else {
				toast.error("Update failed", {
					position: "top-right",
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoadingUpdate]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">{"User"}</div>
					<div className="col-lg-12 col-md-6 wow fadeInLeft" data-wow-duration="0.6">
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
						<div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="0.6">
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
									<h6>${userData?.activeDeposit}</h6>
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
									<h6>${}</h6>
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
									<h6>
										$
										{userData?.withdrawals?.reduce(
											(acc: any, withdrawal: any) => acc + withdrawal.amount,
											0
										)}
									</h6>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div className="post-date">{"User Wallets: "}</div>
					<table cellSpacing="0" cellPadding="0" width="100%">
						<tr>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }}></td>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="left">
								<b>Processing</b>
							</td>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
								<b>Available</b>
							</td>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
								<b>Pending</b>
							</td>
							<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
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
									<span style={{ color: "green" }}>${wallet?.available}.00</span>
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

					<div className="post-date">{"Withdrawals"}</div>
					<p>
						<form onSubmit={handleSubmit(submitForm)}>
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tr style={{ color: "#FF7810" }}>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="left">
										<b>Wallet Name</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
										<b>Amount</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
										<b>Status</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
										<b>Action</b>
									</td>
								</tr>
								{data
									?.find((item: any) => item._id == userId)
									?.withdrawals?.map((row: any) => (
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
														background: row.status === "cancelled " ? "grey" : "",
														cursor: row.status === "pending" ? "pointer" : "",
													}}
													disabled={row.status === "cancelled" || LoadingWithdrawal}
													onClick={() => {
														console.log({
															userToCancel: userData?.username,
															username: user.username,
															withdrawal: row._id,
														});
														cancelWithdrawal({
															userToCancel: userData?.username,
															username: user.username,
															withdrawalId: row._id,
														});
													}}
													type="submit"
													value={"Cancel"}
													className="sbmt"
												/>
												<input
													style={{
														background: row.status === "approved" ? "grey" : "",
														cursor: row.status === "pending" ? "pointer" : "",
													}}
													disabled={
														row.status === "approved" ||
														row.status === "cancelled" ||
														LoadingWithdrawal_
													}
													onClick={() => {
														console.log({
															userToApprove: userData?.username,
															username: user.username,
															withdrawal: row._id,
														});
														approveWithdrawal({
															userToApprove: userData?.username,
															username: user.username,
															withdrawalId: row._id,
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
					<div className="post-date">{"Approve Deposits"}</div>
					<p>
						<form action="">
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tr>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="left">
										<b>Wallet Name</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
										<b>Amount</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
										<b>Status</b>
									</td>
									<td height="40" style={{ backgroundColor: "#f7f9fe" }} align="center">
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
					<br />
					<div className="post-date">{"Edit Account"}</div>
					<p>
						<form onSubmit={handleSubmitEdit(onSubmit)}>
							<table cellSpacing="0" cellPadding="0" width="75%">
								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										Account Name:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										{userData?.username}
									</td>
								</tr>
								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										Registration date:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										Dec-4-2019 01:07:07 PM
									</td>
								</tr>
								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										Full Name:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										<input
											type="text"
											name="fullname"
											value={userData?.fullname}
											className="form-control"
										/>
									</td>
								</tr>

								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										New Password:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										<input
											type="password"
											{...registerEdit("password", { required: true })}
											value=""
											className="form-control"
										/>
									</td>
								</tr>
								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										Retype Password:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										<input type="password" name="password2" className="form-control" />
									</td>
								</tr>
								{userData?.wallets?.map((wallet: any, index: any) => (
									<tr key={index}>
										<Controller
											name={`wallets[${index}].address`}
											control={controlEdit}
											defaultValue={wallet.address}
											render={({ field }) => (
												<>
													<td
														width="25%"
														height="40"
														style={{
															paddingTop: "10px",
															paddingBottom: "10px",
														}}
													>
														{wallet?.name} ACC No:
													</td>
													<td
														style={{
															paddingLeft: "20px",
															paddingTop: "10px",
															paddingBottom: "10px",
														}}
														width="45%"
														height="40"
													>
														<input className="form-control" type="text" {...field} />
													</td>
												</>
											)}
										/>
									</tr>
								))}
								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										E-mail address:
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										<input
											type="text"
											name="email"
											value={userData?.email}
											disabled
											className="form-control"
										/>
									</td>
								</tr>

								<tr>
									<td
										width="25%"
										height="40"
										style={{ paddingTop: "10px", paddingBottom: "10px" }}
									>
										&nbsp;
									</td>
									<td
										style={{
											paddingLeft: "20px",
											paddingTop: "10px",
											paddingBottom: "10px",
										}}
										width="45%"
										height="40"
									>
										<input type="submit" value="Change Account data" className="sbmt" />
									</td>
								</tr>
							</table>
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};
export default User;
