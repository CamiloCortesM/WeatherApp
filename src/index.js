import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import WorldWeather from "./WorldWeather";

const root = createRoot(document.getElementById("root"));
root.render(<WorldWeather />);
