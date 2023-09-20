import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
	useChangePlanMutation,
	useGetPlansQuery,
} from "../features/api/Auth/authApiSlice";
import { toast } from "react-toastify";

const ChangePlans = () => {
	const { data: plans = [] } = useGetPlansQuery("");
	const [changePlan, { isLoading, isSuccess, isError }] =
		useChangePlanMutation();

	useEffect(() => {
		if (isSuccess) {
			toast.success("Plan changed successfully");
		}
		if (isError) {
			toast.error("Plan change failed", {
				position: "top-right",
			});
		}
	}, [isLoading, isSuccess, isError]);
	return (
		<div className="col-lg-9 col-md-12 order-lg-12">
			<div className="post">
				<div className="post-desc">
					<div className="post-date">{"Change Plans"}</div>
					<p>
						<form action=""></form>
						<table cellSpacing="0" cellPadding="0" width="75%">
							<thead>
								<tr>
									<th>Name</th>
									<th>Rate</th>
									<th>Min</th>
									<th>Max</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{plans.map((plan: any) => (
									<PlanRow
										key={plan._id}
										plan={plan}
										changePlan={changePlan}
										isLoading={isLoading}
									/>
								))}
							</tbody>
						</table>
					</p>
				</div>
			</div>
		</div>
	);
};

function PlanRow({
	plan,
	changePlan,
	isLoading,
}: {
	plan: any;
	changePlan: any;
	isLoading: any;
}) {
	const [isEditing, setIsEditing] = useState(false);
	const { register, handleSubmit } = useForm({
		defaultValues: {
			id: plan?.id,
			name: plan?.name,
			rate: plan?.rate,
			min: plan?.min,
			max: plan?.max,
		},
	});

	const onSubmit = async (values: any) => {
		await changePlan({ ...values }).unwrap();
		setIsEditing(false);
	};

	return (
		<tr>
			<td>
				{isEditing ? (
					<input
						className="name-input"
						{...register("name")}
						disabled={isLoading}
					/>
				) : (
					plan.name
				)}
			</td>
			<td>
				{isEditing ? (
					<input
						className="name-input"
						type="number"
						{...register("rate")}
						disabled={isLoading}
					/>
				) : (
					plan.rate
				)}
			</td>
			<td>
				{isEditing ? (
					<input
						className="name-input"
						type="number"
						{...register("min")}
						disabled={isLoading}
					/>
				) : (
					plan.min
				)}
			</td>
			<td>
				{isEditing ? (
					<input
						className="name-input"
						type="number"
						{...register("max")}
						disabled={isLoading}
					/>
				) : (
					plan.max
				)}
			</td>
			<td>
				{isEditing ? (
					<button onClick={handleSubmit(onSubmit)} disabled={isLoading}>
						Save
					</button>
				) : (
					<button onClick={() => setIsEditing(true)}>Edit</button>
				)}
			</td>
		</tr>
	);
}

export default ChangePlans;
