import React from "react"
import { Router } from "@reach/router"
import CustomComponent from "./components/CustomComponent";
import Footer from "./components/chrome/footer/Footer"
const App = () => {

	return (
		<div>
			<h1>Foo Bar </h1>
			<Router>
				<CustomComponent path="/" />
				
			</Router>
			<Footer />
		</div>
	)
}

export default App
