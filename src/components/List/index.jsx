import React, { useState } from 'react';
import './index.scss'
import Note from '../Note'

const List = () => {

  return (
    <section>
      <h2>Liste de toutes les notes</h2>
      <button onClick = {() => localStorage.clear()}> Détruire toutes les notes </button>
      <
    </section>
  )
}

export default List;
