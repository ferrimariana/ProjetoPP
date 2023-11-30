import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";
import theme from "./theme";
import { UserContextProvider } from "./context/user_context";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Publication from "./pages/publication";
import Profile from "./pages/profile";
import Comprar from "./pages/comprar";
import Editar from "./pages/edit_profile";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/publication", element: <Publication /> },
  { path: "/profile", element: <Profile /> },
  { path: "/comprar", element: <Comprar /> },
  { path: "/edit", element: <Editar /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
