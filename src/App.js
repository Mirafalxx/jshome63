import React from "react";
import About from "./Containers/About/About";
import Add from "./Containers/Add/Add";
import Contacts from "./Containers/Contacts/Contacts";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import EditPost from "./Containers/EditPost/EditPost";
import Header from "./Components/UI/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/edit" component={EditPost} />
          <Route path="*">error</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
