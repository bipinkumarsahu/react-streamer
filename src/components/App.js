import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui segment container">
      <BrowserRouter>
        <Header />
        <Route exact component={StreamList} path="/" />
        <Route exact component={StreamDelete} path="/streams/delete" />
        <Route exact component={StreamEdit} path="/streams/edit" />
        <Route exact component={StreamCreate} path="/streams/new" />
        <Route exact component={StreamShow} path="/streams/show" />
      </BrowserRouter>
    </div>
  );
};

export default App;
