import React from "react";
import ReactDOM from "react-dom";
import './index.scss';
import NoteDisplay from './components/NoteDisplay';
import List from './components/List';

const App = () => {

  return (
    <section>
      <NoteDisplay />
      <List />
    </section>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
