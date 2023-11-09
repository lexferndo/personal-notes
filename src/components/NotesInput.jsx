/* eslint-disable react/prop-types */
import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onChangeTitleEventHandler = this.onChangeTitleEventHandler.bind(this);
    this.onChangeBodyEventHandler = this.onChangeBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    this.onChangeLimitEventHandler = this.onChangeLimitEventHandler.bind(this);
  }

  onChangeTitleEventHandler(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  onChangeBodyEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onChangeLimitEventHandler() {
    this.setState(() => {
      const titleInput = document.getElementById("title-input");
      const maxLimit = 50;
      const currentLength = titleInput.value.length;

      const remainingChar = Math.max(maxLimit - currentLength, 0);

      return {
        limit: remainingChar,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="notes-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p>Sisa Karakter : {this.state.limit}</p>
          <input
            id="title-input"
            type="text"
            className="notes-input_title"
            placeholder="Judul"
            maxLength={50}
            value={this.state.title}
            onChange={this.onChangeTitleEventHandler}
            onInput={this.onChangeLimitEventHandler}
          />
          <br />
          <textarea
            className="notes-input_body"
            placeholder="Tuliskan Catatan Anda"
            value={this.state.body}
            onChange={this.onChangeBodyEventHandler}
          ></textarea>
          <br />
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
