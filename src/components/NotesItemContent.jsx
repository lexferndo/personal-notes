/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";

class NotesItemContent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Notes Item Created!");
  }

  render() {
    return (
      <div className="notes-item_content">
        <h3 className="notes-item_title">{this.props.title}</h3>
        <p className="notes-item_date">
          {showFormattedDate(this.props.createdAt)}
        </p>
        <p className="notes-item_body">{this.props.body}</p>
      </div>
    );
  }
}

export default NotesItemContent;
