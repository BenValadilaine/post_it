import React, { useState, useEffect } from 'react';
import './index.scss';

const MarkdownInput = ({updateNote}) => {
  const [inputTitle, setInputTitle] = useState();
  const [inputContent, setInputContent] = useState();

  const handleChange = (event) => {
    if (event.target.id === "inputContent"){
      setInputContent(event.target.value);
    } else {
      setInputTitle(event.target.value);
    }
  }

  const save = (event) => {
    event.preventDefault();
    localStorage.setItem(JSON.stringify(inputTitle), JSON.stringify(inputContent));
  }

  useEffect(()=> {
    updateNote(inputTitle, inputContent);
  }, [inputTitle, inputContent]);

  return (
    <form className="noteForm">
      <div>
        <input
          type="text"
          id="inputTitle"
          value={'' || inputTitle }
          placeholder="Titre de la note"
          onChange={handleChange}/>
      </div>
      <div>
        <textarea
          type="text"
          id="inputContent"
          value={'' || inputContent }
          placeholder="Contenu de la note"
          onChange={handleChange}/>
      </div>
      <button type="submit" onClick={save}>Sauvegarder</button>
    </form>
  );
}

export default MarkdownInput;
