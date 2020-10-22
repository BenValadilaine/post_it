import React, { useState, useEffect } from 'react';
import './index.scss'
import Note from '../Note'

const List = () => {
  const [notes, setNotes] = useState([])

  const showNotes = () => {
      let notes = [];
      for( let i = 0; i < localStorage.length; i++){
        notes.push([localStorage.key(i), localStorage[localStorage.key(i)]]);
      }
      setNotes(notes);
    }

  useEffect(() => {
      showNotes();
    }, [notes]);

  return (
    <section className="noteList">
      <h2>Liste de toutes les notes</h2>
      <button onClick = {() => localStorage.clear()}> Détruire toutes les notes </button>
      <div id="list">
        {notes.map((note) => (
          <Note title={note[0]} content={note[1]} />
        ))}
      </div>
    </section>
  )
}

export default List;
