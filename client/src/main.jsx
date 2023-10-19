import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
} from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "/items/:id",
//         element: <Produc />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
