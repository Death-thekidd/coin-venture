import { useSelector } from "react-redux";
import images from "../constants/images";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useWithdrawAmountMutation } from "../features/api/Auth/authApiSlice";

const selectState = (state: any) => state.user;
const Withdraw = () => {
	const { register, handleSubmit, control } = useForm();
	const { user, userWallets } = useSelector(selectState);
	const [selectedWallet, setSelectedWallet] = useState(null);
	const [withdrawAmount, { isLoading, isError, error, isSuccess, data }] =
		useWithdrawAmountMutation();
	const navigate = useNavigate();
	const submitForm = (data: any) => {
		withdrawAmount({
			username: user?.username,
			amount: data?.amount,
			walletName: data?.walletName,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(
				"Your withdrawal request has been submitted and it is under review by our administrators"
			);
			console.log(data);
			setTimeout(() => {
				navigate("/dashboard/account");
			}, 2000);
		}
		if (isError) {
			console.log(error);
			if (error) {
				toast.error(error as string, { position: "top-right" });
			} else {
				toast.error("Withdrawal Error", {
					position: "top-right",
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Ask for Withdrawal</div>
					<p>
						<form onSubmit={handleSubmit(submitForm)}>
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tr>
									<td height="40">
										<span color="#FF7810">
											Account Balance<b>: </b>
										</span>
										$<b>{user?.balance}</b>
									</td>
									<td height="40">&nbsp;</td>
								</tr>
								<tr>
									<td height="40">
										<span color="#FF7810">
											Pending Withdrawals<b>: </b>
										</span>
										$<b></b>
									</td>
									<td height="40">&nbsp;</td>
								</tr>
							</table>
							<br />
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
							<br />
							{user?.balance <= 0 ? (
								<span color="#FF7810">You have no funds to withdraw.</span>
							) : (
								<table cellSpacing="0" cellPadding="0" border={0} width="100%">
									<tr>
										<td height="40">
											<b>Your Account Balance ($):</b>
										</td>
										<td align="right" height="40">
											${user?.balance}
										</td>
									</tr>
									<tr>
										<td height="40">&nbsp;</td>
										<td align="right" height="40">
											<small></small>
										</td>
									</tr>
									<tr>
										<td height="40">
											<b>
												<span color="#FF7810">Amount to Spend ($):</span>
											</b>
										</td>
										<td align="right" height="40">
											<input
												type="number"
												step={"any"}
												className="form-control"
												style={{ textAlign: "right" }}
												{...register("amount", { required: true })}
											/>
										</td>
									</tr>
									<tr id="coumpond_block" style={{ display: "none" }}>
										<td>Compounding(%):</td>
										<td align="right">
											<select
												name="compound"
												className="inpts"
												id="compound_percents"
											></select>
										</td>
									</tr>

									<tr>
										<td colSpan={2} style={{ paddingTop: "25px" }}>
											<table cellSpacing="0" cellPadding="0" border={0} width="100%">
												{user?.wallets?.map((wallet: any, index: any) => (
													<tr key={index}>
														<td height="30">
															<Controller
																name="walletName"
																control={control}
																render={({ field }) => (
																	<input
																		type="radio"
																		{...field}
																		value={wallet.name}
																		checked={selectedWallet === wallet.name}
																		onChange={() => setSelectedWallet(wallet.name)}
																	/>
																)}
															/>
														</td>
														<td height="30">Withdraw funds from {wallet.name}</td>
													</tr>
												))}
											</table>
										</td>
									</tr>
									<tr>
										<td colSpan={2} style={{ paddingTop: "20px" }}>
											<input type="submit" className="sbmt" />
										</td>
									</tr>
								</table>
							)}
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Withdraw;
