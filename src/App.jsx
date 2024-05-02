import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { FindCar } from "./pages/FindCar"

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/findcar/advanced" element={<FindCar />} />
			</Routes>
		</BrowserRouter>
	)
}
