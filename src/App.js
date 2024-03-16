import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/SubmitOrder/Register";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import AdminDashboard from "./components/Admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/:options" component={AdminDashboard} />

          <Route exact path="/order" component={Register} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
