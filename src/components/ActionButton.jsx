/* eslint-disable react/prop-types */
function ActionButton({ id, name, onDelete, onArchive }) {
  return (
    <>
      <button className="note-item_delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button
        className="note-item_archive-button"
        onClick={() => onArchive(id)}
      >
        {name}
      </button>
    </>
  );
}

export default ActionButton;
