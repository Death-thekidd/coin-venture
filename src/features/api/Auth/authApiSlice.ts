import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../../User/userSlice";

export const userApiSlice = createApi({
	reducerPath: "userApiSlice",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://coin-venture-backend.vercel.app/",
	}),
	tagTypes: ["User", "Users", "Plans", "Wallets"],
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
			providesTags: ["Users"],
		}),
		getUser: builder.query({
			query: (id) => `api/test/user/${id}`,
			transformResponse: (response: any) => response.data,
			providesTags: ["User"],
		}),
		updateUser: builder.mutation({
			query: (payload) => ({
				url: "/api/test/update-user",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["User"],
			transformResponse: (response: any) => response.data,
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
		withdrawAmount: builder.mutation({
			query: (payload) => ({
				url: "/api/test/withdraw",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["User"],
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
			invalidatesTags: ["User"],
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
			invalidatesTags: ["Users"],
		}),
		cancelWithdrawal: builder.mutation({
			query: (payload) => ({
				url: "/api/test/cancel-withdrawal",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Users"],
		}),
		approveWithdrawal: builder.mutation({
			query: (payload) => ({
				url: "/api/test/approve-withdrawal",
				method: "POST",
				body: payload,
				headers: {
					"Content-type": "application/json",
				},
			}),
			invalidatesTags: ["Users"],
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
			invalidatesTags: ["Plans"],
		}),
		getPlans: builder.query({
			query: () => ({
				url: "/api/test/plans",
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
			providesTags: ["Plans"],
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
			invalidatesTags: ["Wallets"],
		}),
		getWallets: builder.query({
			query: () => ({
				url: "/api/test/wallets",
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
			providesTags: ["Wallets"],
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
	useWithdrawAmountMutation,
	useApproveDepositMutation,
	useCancelWithdrawalMutation,
	useApproveWithdrawalMutation,
	useChangeBalanceMutation,
	useChangePlanMutation,
	useChangeWalletMutation,
	useGetPlansQuery,
	useGetWalletsQuery,
	useUpdateUserMutation,
} = userApiSlice;
