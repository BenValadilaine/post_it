import React from 'react';
import Showdown from 'showdown';
import './index.scss'

const Note = ({title, content}) => {

  const createMarkup = (markdown) => {
    const converter = new Showdown.Converter();
    let html = converter.makeHtml(markdown);
    return {__html: html};
  }

  return(
    <section>
      <div className="note">
        <h1 className="noteTitle">{title}</h1>
        <p className="noteContent"
        dangerouslySetInnerHTML={createMarkup(content)} />
      </div>
    </section>
  )
}

export default Note;
