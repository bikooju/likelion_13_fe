import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Search from "./Search";
import { BrowserRouter, Route, Routes } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />}></Route>
      <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);
