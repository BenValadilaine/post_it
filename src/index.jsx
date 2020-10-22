import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.scss';
// import List from './components/List';
// import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';


const App = () => {

  return (
    <MarkdownInput />
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
