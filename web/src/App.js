import React from "react"
import { Router } from "@reach/router"
import CustomComponent from "./components/CustomComponent"
import Footer from "./components/chrome/footer/Footer"
import CovertComponentPlaygound from "./components/sandbox/zCovert/CovertComponentPlaygound"
import Header from "./components/chrome/header/Header"
import { Container } from "reactstrap"
const App = () => {
	return (
		<>
			<Header />
			<Container>
				<Router>
					<CustomComponent path="/" />
					<CovertComponentPlaygound path="/covert" />
				</Router>
			</Container>
			<Footer />
		</>
	)
}

export default App
