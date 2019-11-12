import React from "react"
import { Router } from "@reach/router"
import CustomComponent from "./components/CustomComponent";
const App = () => {

	return (
		<div>
			<h1>Foo Bar </h1>
			<Router>
				<CustomComponent path="/" />
			</Router>
		</div>
	)
}

export default App
