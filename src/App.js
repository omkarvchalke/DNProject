import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Faq from "./pages/Faq";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DocLogin from "./pages/DocLogin";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Main}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/docLogin" component={DocLogin}></Route>
        {/* <Route path="/faq" component={}></Route> */}
       
      </Switch>
    </Router>
  );
}

export default App;
