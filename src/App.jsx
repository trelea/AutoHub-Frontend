import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}
