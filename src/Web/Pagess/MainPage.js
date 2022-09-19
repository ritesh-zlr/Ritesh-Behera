import React from "react";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import AuthProvider from "./contexts/AuthProvider";
// import UIProvider from "./contexts/UIProvider";
// import AppRoutes from "./routes";

function MainPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
