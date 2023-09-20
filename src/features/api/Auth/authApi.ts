import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../../User/userSlice";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `https://coin-venture-backend.vercel.app/`,
	}),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (payload) => ({
				url: payload,
				method: "GET",
				headers: {
					"Content-type": "application/json",
				},
			}),
			transformResponse: (result: any) => result.data,
			async onQueryStarted({ dispatch, queryFulfilled }) {
				try {
					const { user } = await queryFulfilled;
					dispatch(setUser(user));
				} catch (error) {
					console.log(error);
				}
			},
		}),
	}),
});

export const { useGetUserQuery } = userApi;
