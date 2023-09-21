import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../features/api/Auth/authApiSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const selector = (state: any) => state.user;

const Users = () => {
	const {} = useSelector(selector);
	const navigate = useNavigate();
	const { isLoading, isSuccess, data } = useGetUsersQuery("");
	useEffect(() => {
		if (isSuccess) {
			console.log(data);
		}
	}, [isLoading, isSuccess, data]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">Users</div>
					<p>
						<table cellSpacing="0" cellPadding="0" width="100%">
							<tr>
								<td height="40" style={{ backgroundColor: "#f7f9fe" }}></td>
								<td
									height="40"
									style={{ backgroundColor: "#f7f9fe" }}
									align="left"
								>
									<b>Username</b>
								</td>
								<td
									height="40"
									style={{ backgroundColor: "#f7f9fe" }}
									align="center"
								>
									<b>Email</b>
								</td>
								<td
									height="40"
									style={{ backgroundColor: "#f7f9fe" }}
									align="center"
								>
									<b>Balance</b>
								</td>
							</tr>
							{data?.map((row: any) => (
								<tr
									key={row._id}
									style={{
										cursor: "pointer",
									}}
									onClick={() => {
										navigate(`/dashboard/user/${row._id}`);
									}}
								>
									<td height="40" style={{ paddingLeft: "10px" }}></td>
									<td height="40" align="left">
										{row.username}
									</td>
									<td height="40" align="center">
										{row.email.slice(0, 5)}...{row.email.slice(-5)}
									</td>
									<td height="40" align="center">
										${row.balance}
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

export default Users;
