/* eslint-disable react/prop-types */
import ActionButton from "./ActionButton";
import NotesItemContent from "./NotesItemContent";

function NotesItem({ id, name, onDelete, onArchive, title, createdAt, body }) {
  return (
    <div className="notes-item">
      <NotesItemContent title={title} createdAt={createdAt} body={body} />

      <div className="note-item_action">
        <ActionButton
          id={id}
          name={name}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      </div>
    </div>
  );
}

export default NotesItem;
