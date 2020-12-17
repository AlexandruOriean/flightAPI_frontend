import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import SearchResult from "./pages/SearchResult";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Registration";
import Login from "./components/Login";
import Logout from "./components/Logout";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/flights/:from/:to/:date" component={SearchResult} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout/:id" component={Checkout} />
            <Route path="/ordersuccess" component={OrderSuccess} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>

          <Footer />
          <Copyright />
        </Router>
      </div>
    );
  }
}

export default App;
