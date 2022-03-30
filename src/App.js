import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import info from "./pages/info";
import menu from "./pages/menu";
import complete from "./pages/complete";
import payment from "./pages/payment";
import contact from "./pages/contact";
import togo from "./pages/togo";
import reservations from "./pages/reservations";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/info" element={<info />} />
          <Route path="/contact" element={<contact />} />
          <Route path="/togo" element={<togo />} />
          <Route path="/reservations" element={<reservations />} />
          <Route path="/menu" element={<menu />} />
          <Route path="/payment" element={<payment />} />
          <Route path="/complete" element={<complete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
