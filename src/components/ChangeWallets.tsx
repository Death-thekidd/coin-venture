import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
	useChangeWalletMutation,
	useGetWalletsQuery,
} from "../features/api/Auth/authApiSlice";
import { toast } from "react-toastify";

const ChangeWallets = () => {
	const { data: wallets = [], isSuccess: isSuccess_ } = useGetWalletsQuery("");
	const [changeWallet, { isLoading, isSuccess, isError }] =
		useChangeWalletMutation();
	const [isEditing, setIsEditing] = useState(false);

	const { register, handleSubmit, getValues, setValue } = useForm({
		defaultValues: {
			walletArray: [],
		},
	});

	const onSubmit = async (values: any) => {
		await changeWallet([...values.walletArray]).unwrap();
		setIsEditing(false);
	};

	useEffect(() => {
		if (isSuccess_) {
			console.log(isSuccess_);
			setValue("walletArray", wallets);
			console.log(getValues());
		}
	}, [isSuccess_, wallets, setValue, getValues]);
	useEffect(() => {
		if (isSuccess) {
			toast.success("Wallet changes successfully");
		}
		if (isError) {
			toast.error("Wallet change failed", {
				position: "top-right",
			});
		}
	}, [isLoading, isSuccess, isError]);
	console.log(getValues());
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">{"Change Wallets"}</div>
					<p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<table cellSpacing="0" cellPadding="0" width="75%">
								{wallets?.map((wallet: any, index: any) => (
									<WalletRow
										key={wallet?._id}
										wallet={wallet}
										changeWallet={changeWallet}
										isLoading={isLoading}
										register={register}
										isEditing={isEditing}
										setIsEditing={setIsEditing}
										index={index}
									/>
								))}
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
										{isEditing ? (
											<input type="submit" value="Submit" className="sbmt" />
										) : (
											<button
												className="sbmt"
												onClick={() => setIsEditing(true)}
											>
												{"Edit"}
											</button>
										)}
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

function WalletRow({
	wallet,
	isLoading,
	isEditing,
	register,
	index,
}: {
	wallet: any;
	changeWallet: any;
	isLoading: any;
	isEditing: any;
	setIsEditing: any;
	register: any;
	index: any;
}) {
	return (
		<>
			<tr>
				<td
					width="25%"
					height="40"
					style={{ paddingTop: "10px", paddingBottom: "10px" }}
				>
					{wallet?.name} Address No:
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
					{isEditing ? (
						<input
							type="text"
							className="form-control"
							{...register(`walletArray[${index}].address`)}
							disabled={isLoading}
						/>
					) : (
						<input
							type="text"
							className="form-control"
							{...register(`walletArray[${index}].address`)}
							disabled={true}
						/>
					)}
				</td>
			</tr>
		</>
	);
}

export default ChangeWallets;
