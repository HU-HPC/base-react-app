import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import App from "./App"
require("./scss/base.scss")

ReactDOM.render(<App />, document.getElementById("root"))