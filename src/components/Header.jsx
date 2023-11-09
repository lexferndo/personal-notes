/* eslint-disable react/prop-types */
function Header({ value, keyword }) {
  return (
    <div className="note-app_header">
      <h1>Catatan</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Pencarian"
          value={value}
          onChange={keyword}
        />
      </div>
    </div>
  );
}

export default Header;
