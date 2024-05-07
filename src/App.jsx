import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { FindCar } from "./pages/FindCar"
import { CarInfo } from "./pages/CarInfo"
import { Auctions } from "./pages/Auctions"
import { Page404 } from "./pages/Page404"
import { Register } from "./pages/Register"



export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/findcar/advanced" element={<FindCar />} />
				<Route path="/car/info" element={<CarInfo />} />
				<Route path="/auctions" element={<Auctions />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}
