import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
require("./scss/base.scss")

ReactDOM.render(<App />, document.getElementById("root"))