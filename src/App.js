import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import Home from "./pages/home";
import Info from "./pages/info";
import Menu from "./pages/menu";
import Complete from "./pages/complete";
import Contact from "./pages/contact";
import Reservations from "./pages/reservations";
import Checkout from "./pages/checkout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="" element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="menu" element={<Menu />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="complete" element={<Complete />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
