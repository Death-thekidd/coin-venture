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
			desc: "We have done a lot of calculations to come up with the best return investment plans while keeping in mind that they need to be consistent and reliable in the long run.",
		},
		{
			title: "FASTEST PAYMENTS",
			desc: "Our payments are made automatically. We use Bitcoin, Litecoin, Ethereum, Perfect Money and Payeer.",
		},
		{
			title: "EASY TO USE",
			desc: "You don't need to know about trading, cryptos, pips, pipettes, satoshis and chart analysis. We do the hard work. You enjoy profits through our easy-to-use program, regardless of your level of expertise.",
		},
		{
			title: "HIGH SECURITY",
			desc: "All data is encrypted by SSL using HTTPS protocol.Also, our server has anti-DDoS and firewall that shield against attacks and hackers.",
		},
		{
			title: "24/7 SUPPORT",
			desc: "You can access your account, invest or withdraw 24 hours a day, every day. Our support team is also here to help you.",
		},
	],
	deposit: {
		amount: 0,
		selectedMethod: {},
		selectedPlan: {},
		methods: [
			{
				address: "bc1q6xtet3kzcxlegh0mskjvge00r3eyfuvv7k6w06",
				name: "Bitcoin",
			},
			{
				address: "0x7b7a4Fbf91931D9F78D791c2E1343B5087A6bd72",
				name: "Ethereum",
			},
			{
				address: "TDMLHf4ikazQt9VnpNwam9mLMkxdW5vsSV",
				name: "Usdt Trc20",
			},
			{
				address: "0x7b7a4Fbf91931D9F78D791c2E1343B5087A6bd72",
				name: "Usdt Erc20",
			},
			{ address: "TDMLHf4ikazQt9VnpNwam9mLMkxdW5vsSV", name: "Tron" },
			{
				address: "ltc1qwhnd8my7nlyg04pel3xztjuenw49pqxeeczeul",
				name: "Litecoin",
			},
			{
				address: "P1073074977",
				name: "Payeer",
			},
			{
				address: "U37645106",
				name: "Perfect Money",
			},
		],
		plans: [
			{
				id: "starter",
				name: "STARTING PLAN",
				rate: "6",
				min: "50",
				max: "500",
			},
			{
				id: "pro",
				name: "PROFESSIONAL PLAN",
				rate: "10",
				min: "500",
				max: "1000",
			},
			{
				id: "premium",
				name: "PREMIUM PLAN",
				rate: "14",
				min: "1,000",
				max: "5,000",
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
