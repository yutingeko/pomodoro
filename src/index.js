import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalStyle from "./index.style";
import Main from "./components/Main";
import TodoList from "./components/TodoList";
import Analytics from "./components/Analytics";
import Ringtones from "./components/Ringtones";

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <GlobalStyle />
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/todolist" component={TodoList} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/ringtones" component={Ringtones} />
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
