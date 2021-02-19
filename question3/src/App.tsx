import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { appRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
