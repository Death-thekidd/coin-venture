import { useSelector } from "react-redux";
import images from "../constants/images";

const selectState = (state) => state.user;
const Withdraw = () => {
	const { user, userWallets } = useSelector(selectState);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Ask for Withdrawal</div>
					<p>
						<form>
							<table cellSpacing="0" cellPadding="0" width="100%">
								<tr>
									<td height="40">
										<font color="#FF7810">
											Account Balance<b>: </b>
										</font>
										$<b>{user?.balance}</b>
									</td>
									<td height="40">&nbsp;</td>
								</tr>
								<tr>
									<td height="40">
										<font color="#FF7810">
											Pending Withdrawals<b>: </b>
										</font>
										$<b></b>
									</td>
									<td height="40">&nbsp;</td>
								</tr>
							</table>
							<br />
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
								{userWallets?.map((wallet, index) => (
									<tr key={index}>
										<td height="40" style={{ paddingLeft: "10px" }}></td>
										<td height="40" align="left">
											<img
												src={images[`${wallet.name}`]}
												width="44"
												height="17"
												align="absmiddle"
											/>{" "}
											{wallet.name}
										</td>
										<td height="40" align="center">
											<span style={{ color: "green" }}>
												${wallet?.available}.00
											</span>
										</td>
										<td height="40" align="center">
											<span style={{ color: "red" }}>
												${wallet?.pending}.00
											</span>
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
							<font color="#FF7810">You have no funds to withdraw.</font>
						</form>
					</p>
				</div>
			</div>
		</div>
	);
};
export default Withdraw;
