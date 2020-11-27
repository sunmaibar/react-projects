import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { AppProVider } from "./context"
ReactDOM.render(
  <React.StrictMode>
    <AppProVider>
      <App />
    </AppProVider>
  </React.StrictMode>,
  document.getElementById("root")
)
