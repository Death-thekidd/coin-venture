import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainHome from "./components/MainHome";
import About from "./components/About";
import Faq from "./components/Faq";
import Rules from "./components/Rules";
import Signup from "./components/Signup";
import DashBoard from "./components/Dashboard";
import Account from "./components/Account";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import EditAccount from "./components/EditAccount";
import History from "./components/History";
import Users from "./components/Users";
import DepositConfirm from "./components/DepositConfirm";
import User from "./components/User";
import ChangeWallets from "./components/ChangeWallets";
import ChangePlans from "./components/ChangePlans";

function App() {
	return (
		<>
			<div className="App">
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />}>
						<Route index element={<MainHome />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/faq" element={<Faq />}></Route>
						<Route path="/rules" element={<Rules />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/signup/:username" element={<Signup />}></Route>
						<Route path="/dashboard" element={<DashBoard />}>
							<Route path="account" element={<Account />}></Route>
							<Route path="deposit" element={<Deposit />}></Route>
							<Route path="history" element={<History />}></Route>
							<Route path="withdraw" element={<Withdraw />}></Route>
							<Route path="edit_account" element={<EditAccount />}></Route>
							<Route
								path="confirm_deposit"
								element={<DepositConfirm />}
							></Route>
							<Route path="users" element={<Users />}></Route>
							<Route path="user/:userId" element={<User />}></Route>
							<Route path="wallets" element={<ChangeWallets />}></Route>
							<Route path="plans" element={<ChangePlans />}></Route>
						</Route>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
