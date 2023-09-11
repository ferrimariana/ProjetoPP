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
import NewPassword from "./pages/new_password";
import Publication from "./pages/publication";
import Chat from "./pages/chat";
import ChitChat from "./pages/chat/[user]";
import Profile from "./pages/profile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/new_password", element: <NewPassword /> },
  { path: "/publication", element: <Publication /> },
  { path: "/chat", element: <Chat /> },
  { path: "/chat/:user", element: <ChitChat /> },
  { path: "/profile", element: <Profile /> },
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
