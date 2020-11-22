import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { registerMicroApps, start } from "qiankun";
const __DEV__ = process.env.NODE_ENV === 'development'

const { registerMicroApps, start } = qiankun
export default function App() {
  const container1 = useRef();
  const container2 = useRef();
  useEffect(() => {
    registerMicroApps([
      {
        name: "counter1-exported",
        entry: {
            scripts: [__DEV__ ? "//localhost:8201/exported.bundle.js" : "/counter1/exported.bundle.js"]
        },
        container: container1.current,
        activeRule: "/counter1",
      },
      {
        name: "counter2-exported",
        entry: {
            scripts: [__DEV__ ? "//localhost:8202/exported.bundle.js" : "/counter2/exported.bundle.js"]
        },
        container: container2.current,
        activeRule: "/counter2",
      },
    ]);
    start();
  }, []);
  return (
    <Router>
      <div id="header">
        <Link to="/">
          <h2>Root</h2>
        </Link>
        <Link to="/counter1" style={{ marginLeft: "100px" }}>
          Counter1
        </Link>
        <Link to="/counter2" style={{ marginLeft: "100px" }}>
          Counter2
        </Link>

        <div style={{ marginLeft: "200px" }}>
          Current Route:
          <Route path="/" exact>
            root
          </Route>
          <Route path="/counter1" exact>
            counter1
          </Route>
          <Route path="/counter2" exact>
            counter2
          </Route>
        </div>
      </div>
      <div id="main">
        <div ref={container1}>
        </div>
        <div ref={container2}>
        </div>
      </div>
      <Switch></Switch>
    </Router>
  );
}
