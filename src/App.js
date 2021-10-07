import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DocLogin from "./pages/DocLogin";
import DocAppointments from "./pages/DocAppointments";
import AdminLogin from "./pages/AdminLogin";
import AdminAppointment from "./pages/AdminAppointment";
import DocGraph from "./components/DocGraph";
import AdminGraph from "./components/AdminGraph";

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
        <Route path="/docGraph" component={DocGraph}></Route>
        <Route path="/adminGraph" component={AdminGraph}></Route>
      </Switch>
    </Router>
  );
}

export default App;
