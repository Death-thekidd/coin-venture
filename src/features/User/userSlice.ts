import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	route: null,
	userWallets: [
		{
			name: "PerfectMoney",
			address: null,
			available: 0,
			pending: 0,
		},
		{
			name: "Payeer",
			address: null,
			available: 0,
			pending: 0,
		},
		{
			name: "Bitcoin",
			address: null,
			available: 0,
			pending: 0,
		},
		{
			name: "Litecoin",
			address: null,
			available: 0,
			pending: 0,
		},
		{
			name: "Ethereum",
			address: null,
			available: 0,
			pending: 0,
		},
	],
	features: [
		{
			title: "CONSISTENT PROFIT",
			desc:
				"We have done a lot of calculations to come up with the best return investment plans while keeping in mind that they need to be consistent and reliable in the long run.",
		},
		{
			title: "FASTEST PAYMENTS",
			desc:
				"Our payments are made automatically. We use Bitcoin, Litecoin, Ethereum, Perfect Money and Payeer.",
		},
		{
			title: "EASY TO USE",
			desc:
				"You don't need to know about trading, cryptos, pips, pipettes, satoshis and chart analysis. We do the hard work. You enjoy profits through our easy-to-use program, regardless of your level of expertise.",
		},
		{
			title: "HIGH SECURITY",
			desc:
				"All data is encrypted by SSL using HTTPS protocol.Also, our server has anti-DDoS and firewall that shield against attacks and hackers.",
		},
		{
			title: "24/7 SUPPORT",
			desc:
				"You can access your account, invest or withdraw 24 hours a day, every day. Our support team is also here to help you.",
		},
	],
	deposit: {
		amount: 0,
		selectedMethod: {},
		selectedPlan: {},
		methods: [
			{
				address: "",
				name: "Bitcoin",
			},
			{
				address: "",
				name: "...",
			},
			{
				address: "...",
				name: "Usdt Trc20",
			},
			{ address: "...", name: "Tron" },
			{
				address: "...",
				name: "Litecoin",
			},
			{
				address: "...",
				name: "Payeer",
			},
		],
		plans: [
			{
				id: "starter",
				name: "STARTING PLAN",
				interval: "24 HOURS",
				rate: "7",
				min: "50",
				max: "499",
			},
			{
				id: "premium",
				name: "PREMIUM PLAN",
				interval: "10 HOURS",
				rate: "10",
				min: "500",
				max: "999",
			},
			{
				id: "pro",
				name: "PROFESSIONAL PLAN",
				interval: "2 DAYS",
				rate: "15",
				min: "1000",
				max: "5000",
			},
			{
				id: "vip",
				name: "VIP PLAN",
				interval: "3 DAYS",
				rate: "20",
				min: "4999",
				max: "Unlimited",
			},
			{
				id: "blackd",
				name: "BLACK DIAMOND PLAN",
				interval: "30 DAYS",
				rate: "50",
				min: "5000",
				max: "100,000",
			},
		],
	},
};

export const userSlice: any = createSlice({
	initialState,
	name: "adminSlice",
	reducers: {
		logout: () => initialState,
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setRoute: (state, action) => {
			state.route = action.payload;
		},
		setMethod: (state, action) => {
			state.deposit.selectedMethod = state.deposit.methods.find(
				(item) => item.name === action.payload
			)!;
		},
		setPlans: (state, action) => {
			state.deposit.plans = action.payload;
		},
		setMethods: (state, action) => {
			state.deposit.methods = action.payload;
		},
		setPlan: (state, action) => {
			state.deposit.selectedPlan = state.deposit.plans.find(
				(item) => item.id === action.payload
			)!;
		},
		setAmount: (state, action) => {
			state.deposit.amount = Number(action.payload);
		},
	},
});

export default userSlice.reducer;

export const {
	logout,
	setUser,
	setRoute,
	setMethod,
	setPlan,
	setAmount,
	setPlans,
	setMethods,
} = userSlice.actions;
