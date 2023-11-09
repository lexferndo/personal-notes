/* eslint-disable react/prop-types */
import NotesItem from "./NotesItem";

function NotesList({ notes, name, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-list_empty">Empty</p>;
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            name={name}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))}
      </div>
    );
  }
}

export default NotesList;
