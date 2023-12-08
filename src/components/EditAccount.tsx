import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
	useGetUserQuery,
	useUpdateUserMutation,
} from "../features/api/Auth/authApiSlice";
import { Controller, useForm } from "react-hook-form";

const selectState = (state: any) => state.user;

const EditAccount = () => {
	const { handleSubmit, setValue, register, control } = useForm();
	const [userData, setUserData] = useState({
		wallets: [], // Array of wallet objects
		// Other user data fields
	});
	const userId = localStorage.getItem("detroin_uid");
	const {
		data,
		isSuccess: isSuccessUser,
		isLoading: isLoadingUser,
	} = useGetUserQuery(userId);
	console.log(userData);
	useEffect(() => {
		if (isSuccessUser) {
			setUserData(data.data);
			console.log(data);
			user.wallets.forEach((wallet: any, index: any) => {
				setValue(`wallets[${index}].address`, wallet.address);
			});
		}
	}, [isLoadingUser]);
	const [updateUser, { isLoading, isError, error, isSuccess }] =
		useUpdateUserMutation();
	useEffect(() => {
		if (isSuccess) {
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
	}, [isLoading]);
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
	const { user } = useSelector(selectState);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Edit Account</div>
					<p>
						<form onSubmit={handleSubmit(onSubmit)}>
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
										{user?.username}
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
											value={user?.fullname}
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
											{...register("password", { required: true })}
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
											control={control}
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
											value={user?.email}
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

export default EditAccount;
