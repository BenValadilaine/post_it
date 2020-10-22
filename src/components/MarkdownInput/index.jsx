import React, { Component, useState, useEffect } from 'react';
import './index.scss';
//import NoteDisplay from '../NoteDisplay';

const MarkdownInput = () => {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});

  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value)}
  const handleContent = (event) => {
    console.log(event.target.value);
    setContent(event.target.value)}

  return (
    <section>

      <form className="noteForm">
        <div>
          <label>Titre</label>
          <input type="text" id="inputTitle" placeholder="Titre de la note" onChange={handleTitle}/>
        </div>
        <div>
          <input type="text" id="inputContent" placeholder="Contenu de la note" onChange={handleContent}/>
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </section>
  )
}

export default MarkdownInput;
