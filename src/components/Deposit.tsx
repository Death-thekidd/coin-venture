import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	useGetPlansQuery,
	useGetWalletsQuery,
} from "../features/api/Auth/authApiSlice";
import {
	setAmount,
	setMethod,
	setMethods,
	setPlan,
	setPlans,
} from "../features/User/userSlice";

const selectState = (state: any) => state.user;

const Deposit = () => {
	const {
		deposit: { plans: plans_, methods: methods_ },
	} = useSelector(selectState);
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [selectedPlan, setSelectedPlan] = useState("starter");
	const { data: plans = [], isLoading, isSuccess } = useGetPlansQuery("");
	const {
		data: methods = [],
		isLoading: isLoading_,
		isSuccess: isSuccess_,
	} = useGetWalletsQuery("");

	useEffect(() => {
		if (isSuccess) {
			dispatch(setPlans(plans));
		}
	}, [isLoading, isSuccess, plans, dispatch]);

	useEffect(() => {
		if (isSuccess_) {
			dispatch(setMethods(methods));
		}
	}, [isLoading_, isSuccess_, methods, dispatch]);

	const handlePlanChange = (event: any) => {
		setSelectedPlan(event.target.value);
	};
	const [selectedMethod, setSelectedMethod] = useState("Bitcoin");

	const handleMethodChange = (event: any) => {
		setSelectedMethod(event.target.value);
	};
	const submitForm = (data: any) => {
		dispatch(setMethod(selectedMethod));
		dispatch(setPlan(selectedPlan));
		dispatch(setAmount(data.amount));
		setTimeout(() => {
			navigate("/dashboard/confirm_deposit");
		}, 2000);
	};
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Make a Deposit</div>
					<p>
						<form name="spendform" onSubmit={handleSubmit(submitForm)}>
							<input type="hidden" name="form_id" value="15754544117206" />
							<input
								type="hidden"
								name="form_token"
								value="b2478278da18d52d3a9b3c7a82fe06c4"
							/>
							<input type="hidden" name="a" value="deposit" />

							{plans_?.map((plan: any, index: any) => (
								<>
									<table
										key={index}
										width="100%"
										cellSpacing="0"
										cellPadding="0"
									>
										<tr>
											<td
												colSpan={3}
												height="40"
												style={{
													padding: "10px",
													backgroundColor: "#f3f6ff",
												}}
											>
												<input
													type="radio"
													name="h_id"
													value={plan?.id}
													checked={selectedPlan == plan?.id}
													onChange={handlePlanChange}
												/>
												<b>
													{" "}
													<span color="#ff7810">{plan.name}</span>{" "}
												</b>
											</td>
										</tr>
										<tr>
											<td
												style={{
													paddingLeft: "10px",
													height: "40",
													width: "35%",
													backgroundColor: "#f7f9fe",
												}}
											>
												<span color="#ff7810">Plan</span>
											</td>
											<td
												style={{
													paddingLeft: "10px",
													height: "40",
													alignItems: "center",
													backgroundColor: "#f7f9fe",
													width: "35%",
												}}
											>
												<span color="#ff7810">Spent Amount ($)</span>
											</td>
											<td
												width="30%"
												style={{
													paddingLeft: "10px",
													backgroundColor: "#f7f9fe",
												}}
												height="40"
												align="center"
											>
												<span color="#ff7810">
													<span>Daily Profit (%)</span>
												</span>
											</td>
										</tr>
										<tr>
											<td
												className="item"
												style={{
													borderBottom: "1px dotted #f3f6ff",
													paddingLeft: "10px",
													borderLeftWidth: "1px",
													borderRightWidth: "1px",
													borderTopWidth: "1px",
													height: "40",
													width: "35%",
												}}
											>
												{plan.rate}% Daily for 24 hours
											</td>
											<td
												className="item"
												align="center"
												style={{
													borderBottom: "1px dotted #f3f6ff",
													paddingLeft: "10px",
													borderLeftWidth: "1px",
													borderRightWidth: "1px",
													borderTopWidth: "1px",
													height: "40",
													width: "35%",
												}}
											>
												${plan.min}.00 - ${plan.max}.00
											</td>
											<td
												align="center"
												className="item"
												style={{
													borderBottom: "1px dotted #f3f6ff",
													paddingLeft: "10px",
													borderLeftWidth: "1px",
													borderRightWidth: "1px",
													borderTopWidth: "1px",
													height: "40",
													width: "30%",
												}}
											>
												{plan?.rate}
											</td>
										</tr>
									</table>
									<br />
									<br />
								</>
							))}

							<table cellSpacing="0" cellPadding="0" border={0} width="100%">
								<tr>
									<td height="40">
										<b>Your Account Balance ($):</b>
									</td>
									<td align="right" height="40">
										$0.00
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
										<table
											cellSpacing="0"
											cellPadding="0"
											border={0}
											width="100%"
										>
											{methods_?.map((method: any, index: any) => (
												<tr key={index}>
													<td height="30">
														<input
															type="radio"
															name="type"
															value={method?.name}
															checked={selectedMethod == method?.name}
															onChange={handleMethodChange}
														/>
													</td>
													<td height="30">Spend funds from {method.name}</td>
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
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Deposit;
