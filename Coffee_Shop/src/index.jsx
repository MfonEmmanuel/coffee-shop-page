import React from "react";
import ReactDOMClient from "react-dom/client";
import { Coffee } from "./screens/Coffee";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Coffee />);
