import { useEffect, useState } from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";

const selectState = (state: any) => state.user;

const History = () => {
	const { user } = useSelector(selectState);
	const [history, setHistory] = useState<any[]>([]);
	useEffect(() => {
		const depositsArray = user?.deposits?.map((item: any) => ({
			...item,
			type: "deposits",
		}));
		const withdrawalsArray = user?.withdrawals?.map((item: any) => ({
			...item,
			type: "withdrawals",
		}));
		const earningsArray = user?.earnings?.map((item: any) => ({
			...item,
			type: "earnings",
		}));
		setHistory([...depositsArray, ...withdrawalsArray, ...earningsArray]);
	}, [user?.deposits, user?.withdrawals, user?.earnings, history]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">{"My History"}</div>
					<p>
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
									<b>Type</b>
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
							</tr>

							{history.map((row: any, index: any) => (
								<tr key={index}>
									<td height="40" style={{ paddingLeft: "10px" }}></td>
									<td height="40" align="left">
										{row.type}
									</td>
									<td height="40" align="center">
										<span style={{ color: "green" }}>${row?.amount}.00</span>
									</td>
									<td height="40" align="center">
										<span
											style={{
												color: row.status === "approved" ? "green" : "red",
											}}
										>
											{row?.status}
										</span>
									</td>
								</tr>
							))}
						</table>
					</p>
				</div>
			</div>
		</div>
	);
};
export default History;
