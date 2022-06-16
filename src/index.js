import React from "react";
import ReactDOM from "react-dom";
//Step 1. Import react-router functions
import App from "./components/App"
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>, 
document.getElementById("root")
);
