import React, { useState } from 'react';
import Showdown from 'showdown';

import './index.scss';
import MarkdownInput from '../MarkdownInput';

const NoteDisplay = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const updateNote = (title, content) => {
    const converter = new Showdown.Converter();
    setTitle(title);
    setContent(converter.makeHtml(content));
  }

  const createMarkup = (html) => {
    return {__html: html };
  }

  return (
    <section>
      <h3 className="title">Titre : {title}</h3>
      <p className="content" dangerouslySetInnerHTML={createMarkup(content)}/>
      <MarkdownInput  updateNote={updateNote} />
    </section>
  )
}

export default NoteDisplay;
