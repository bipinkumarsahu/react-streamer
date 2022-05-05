import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import history from "../history";

const App = () => {
  //console.log(history)
  return (
    <div className="ui segment container">
      <Router history={history}>
        <Header />{" "}
        <Switch>
          <Route exact component={StreamList} path="/" />
          <Route exact component={StreamDelete} path="/streams/delete/:id" />
          <Route exact component={StreamEdit} path="/streams/edit/:id" />
          <Route exact component={StreamCreate} path="/streams/new" />
          <Route exact component={StreamShow} path="/streams/:id" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
