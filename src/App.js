import logo from "./logo.svg";
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
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/info" component={info} exact />
        <Route path="/contact" component={contact} exact />
        <Route path="/togo" component={togo} exact />
        <Route path="/reservations" component={reservations} exact />
        <Route path="/menu" component={menu} exact />
        <Route path="/payment" component={payment} exact />
        <Route path="/complete" component={complete} exact />
      </Switch>
    </Router>
  );
}

export default App;
