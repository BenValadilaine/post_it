import React, { Component, useState } from 'react';
import './index.scss';

const NoteDisplay = (title, content) => {

  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  )
}

export default NoteDisplay;
