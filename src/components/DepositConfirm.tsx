import { useForm } from "react-hook-form";
import { useDepositAmountMutation } from "../features/api/Auth/authApiSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const selectState = (state: any) => state.user;

const DepositConfirm = () => {
	const { user, deposit } = useSelector(selectState);
	const navigate = useNavigate();
	const { handleSubmit } = useForm();
	const [depositAmount, { isLoading, isError, error, isSuccess, data }] =
		useDepositAmountMutation();
	const submitForm = () => {
		depositAmount({
			username: user?.username,
			amount: deposit?.amount,
			walletName: deposit?.selectedMethod?.name,
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(
				"Your deposit request has been submitted and it is under review by our administrators"
			);
			console.log(data);
			setTimeout(() => {
				navigate("/dashboard/account");
			}, 2000);
		}
		if (isError) {
			console.log(error);
			if ((error as any)?.data) {
				toast.error((error as any).data.message, { position: "top-right" });
			} else {
				toast.error("Deposit Error", {
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
					<div className="post-date">{"Confirm Deposit"}</div>
					<p>
						<form className="my_account" onSubmit={handleSubmit(submitForm)}>
							<h3>{"Please confirm your deposit:"}</h3>
							<br />
							<br />
							<p>
								{`Send your ${deposit?.selectedMethod?.name} to this wallet: `}{" "}
								<b
									style={{ cursor: "pointer" }}
									onClick={async () => {
										try {
											await navigator.clipboard.writeText(
												`${deposit?.selectedMethod?.address}`
											);
											toast.success(" Wallet address copied to clipboard");
										} catch (err) {
											console.log("Failed to copy text: ", err);
										}
									}}
								>{`${deposit?.selectedMethod?.address}`}</b>
							</p>
							<br />
							<br />
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tbody>
									<tr>
										<th>Plan:</th>
										<td>{`${deposit?.selectedPlan?.name}`}</td>
									</tr>
									<tr>
										<th>Profit:</th>
										<td>{`${deposit?.selectedPlan?.rate}.00% in 24 hours`}</td>
									</tr>
									<tr>
										<th>Principal Return:</th>
										<td>No (included in profit)</td>
									</tr>
									<tr>
										<th>Principal Withdraw:</th>
										<td>Available with 0.00% fee </td>
									</tr>

									<tr>
										<th>Credit Amount:</th>
										<td>{`$${deposit?.amount}.00`}</td>
									</tr>
									<tr>
										<th>Deposit Fee:</th>
										<td>0.00% + $0.00 (min. $0.00 max. $0.00)</td>
									</tr>
									<tr>
										<th>Debit Amount:</th>
										<td>{`$${deposit?.amount}.00`}</td>
									</tr>
								</tbody>
							</table>
							<input type="submit" className="sbmt" value={"Submit"} />
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};

export default DepositConfirm;
