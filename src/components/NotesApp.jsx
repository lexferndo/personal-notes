import React from "react";
import Header from "./Header";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

import { getInitialData } from "../utils";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNote: [],
      searchKeyword: "",
    };

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onDeleteArchiveNoteEventHandler =
      this.onDeleteArchiveNoteEventHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onBackNoteEventHandler = this.onBackNoteEventHandler.bind(this);
    this.onSearchKeywordEventHandler =
      this.onSearchKeywordEventHandler.bind(this);
  }

  onSearchKeywordEventHandler(e) {
    this.setState({ searchKeyword: e.target.value });
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: prevState.notes.length + 1,
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onDeleteArchiveNoteEventHandler(id) {
    const archivedNote = this.state.archivedNote.filter(
      (note) => note.id !== id
    );
    this.setState({ archivedNote });
  }

  onArchiveNoteEventHandler(id) {
    this.setState((prevState) => {
      const noteToArchive = prevState.notes.find((note) => note.id === id);
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        archivedNote: [...prevState.archivedNote, noteToArchive],
      };
    });
  }

  onBackNoteEventHandler(id) {
    this.setState((prevState) => {
      const archiveToNote = prevState.archivedNote.find(
        (note) => note.id === id
      );
      return {
        archivedNote: prevState.archivedNote.filter((note) => note.id !== id),
        notes: [...prevState.notes, archiveToNote],
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      const search = this.state.searchKeyword.toLowerCase();
      return (
        note.title.toLowerCase().includes(search) ||
        note.body.toLowerCase().includes(search)
      );
    });
    return (
      <>
        <Header
          value={this.state.searchKeyword}
          keyword={this.onSearchKeywordEventHandler}
        />
        <div className="notes-app_body">
          <NotesInput addNote={this.onAddNoteEventHandler} />
          <h3 className="title-notes-list">Daftar Catatan</h3>
          <NotesList
            notes={filteredNotes}
            name="Arsipkan"
            onDelete={this.onDeleteNoteEventHandler}
            onArchive={this.onArchiveNoteEventHandler}
          />
          <h3 className="title-notes-list">Diarsipkan</h3>
          <NotesList
            notes={this.state.archivedNote}
            name="Pindahkan"
            onDelete={this.onDeleteArchiveNoteEventHandler}
            onArchive={this.onBackNoteEventHandler}
          />
        </div>
      </>
    );
  }
}

export default NotesApp;
