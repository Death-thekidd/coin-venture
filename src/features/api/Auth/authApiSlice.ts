import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../../User/userSlice";

export const userApiSlice = createApi({
	reducerPath: "userApiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://detroin-backend.vercel.app/",
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (payload) => ({
				url: "/api/auth/signup",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			// Pick out data and prevent nested properties in a hook or selector
			transformResponse: (response: any) => response.data,
		}),
		getUsers: builder.query({
			query: () => ({
				url: "/api/test/users",
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		getUser: builder.query({
			query: (id) => `${id}`,
		}),
		loginUser: builder.mutation({
			query: (payload) => ({
				url: "/api/auth/signin",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			async onQueryStarted({ dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					console.log(result.data.user.email);
					dispatch(setUser(result.data.user));
				} catch (error) {}
			},
		}),
		depositAmount: builder.mutation({
			query: (payload) => ({
				url: "/api/test/deposit",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		approveDeposit: builder.mutation({
			query: (payload) => ({
				url: "/api/test/approve-deposit",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		changeBalance: builder.mutation({
			query: (payload) => ({
				url: "/api/test/change-balance",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		changePlan: builder.mutation({
			query: (payload) => ({
				url: "/api/test/change-plan",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		getPlans: builder.query({
			query: () => ({
				url: "/api/test/plans",
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		changeWallet: builder.mutation({
			query: (payload) => ({
				url: "/api/test/change-wallet",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		getWallets: builder.query({
			query: () => ({
				url: "/api/test/wallets",
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		logoutUser: builder.mutation({
			query: () => ({
				url: "/api/auth/signout",
			}),
		}),
	}),
});
export const {
	useRegisterUserMutation,
	useGetUsersQuery,
	useGetUserQuery,
	useLoginUserMutation,
	useLogoutUserMutation,
	useDepositAmountMutation,
	useApproveDepositMutation,
	useChangeBalanceMutation,
	useChangePlanMutation,
	useChangeWalletMutation,
	useGetPlansQuery,
	useGetWalletsQuery,
} = userApiSlice;
