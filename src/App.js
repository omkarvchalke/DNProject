import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DocLogin from "./pages/DocLogin";
import DocAppointments from "./pages/DocAppointments";
import AdminLogin from "./pages/AdminLogin";
import AdminAppointment from "./pages/AdminAppointment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/docLogin" component={DocLogin}></Route>
        <Route path="/adminLogin" component={AdminLogin}></Route>
        <Route path="/docAppointments" component={DocAppointments}></Route>
        <Route path="/adminAppointment" component={AdminAppointment}></Route>
      </Switch>
    </Router>
  );
}

export default App;

