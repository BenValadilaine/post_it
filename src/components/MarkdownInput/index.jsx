import React, { useState } from 'react';
import './index.scss';

const MarkdownInput = ({updateNote}) => {
  const [inputTitle, setInputTitle] = useState({});
  const [inputContent, setInputContent] = useState({});

  const handleChange = (event) => {
    if (event.target.id === "content"){
      console.log(event.target.value);
      setInputContent(event.target.value);
    } else {
      console.log(event.target.value);
      setInputTitle(event.target.value);
    }
    updateNote(inputTitle, inputContent);
  }

  return (
    <form className="noteForm">
      <div>
        <label>Titre</label>
        <input
          type="text"
          id="inputTitle"
          placeholder="Titre de la note"
          onChange={(event) => handleChange(event)}/>
      </div>
      <div>
        <textarea
          type="text"
          id="inputContent"
          placeholder="Contenu de la note"
          onChange={(event) => handleChange(event)}/>
      </div>
      <button type="submit">Sauvegarder</button>
    </form>
  );
}

export default MarkdownInput;
