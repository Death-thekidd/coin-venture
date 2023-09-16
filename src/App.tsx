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
						<Route path="/signup" element={<Signup />}></Route>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
