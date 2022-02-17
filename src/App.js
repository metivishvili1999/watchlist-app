import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
        {/* <Route exact path="/" element={Watchlist}/>
        <Route path="/add" element={Add}/>
        <Route path="/Watched" element={Watched}/> */}
          <Route exact path="/resultcard" element={Watchlist} />
          <Route path="/add" element={Add} />
          <Route path="/watched" element={Watched}/>
          {/* <Route exact path="/welcome"><Watchlist /></Route>
          <Route path="/add"><Add /></Route>
          <Route path="/watched"><Watched /></Route> */}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;