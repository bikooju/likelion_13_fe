import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
