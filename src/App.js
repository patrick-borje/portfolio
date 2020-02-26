import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TypeGame from "./pages/TypeGame";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";
import MyWorks from "./components/MyWorks";
function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/TypeGame">
          <TypeGame />
        </Route>
        <Route path="/Photos">
          <Photos />
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/MyWorks">
          <MyWorks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
