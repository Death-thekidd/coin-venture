import { useSelector } from "react-redux";

const selectState = (state: any) => state.user;

const EditAccount = () => {
	const { user } = useSelector(selectState);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Edit Account</div>
					<p>
						<form>
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
											name="password"
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
										<input
											type="password"
											name="password2"
											className="form-control"
										/>
									</td>
								</tr>
								{user?.wallets.map((wallet: any) => (
									<>
										<tr>
											<td
												width="25%"
												height="40"
												style={{ paddingTop: "10px", paddingBottom: "10px" }}
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
												<input
													type="text"
													className="form-control"
													value={wallet?.address}
													data-validate="regexp"
													data-validate-regexp="^U\d{5,}$"
													data-validate-notice="UXXXXXXX"
												/>
											</td>
										</tr>
									</>
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
										<input
											type="submit"
											value="Change Account data"
											className="sbmt"
										/>
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
