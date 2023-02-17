import React from "react";
import { Key } from "./Key.js";
import "./Piano.css";
import { notes } from "../global/constants.js";
import _ from "lodash";

class Piano extends React.Component {
  render() {
    const keys = _.map(notes, (note, index) => {
      return <Key key={index} note={note.name} />;
    });

    return <div className="piano">{keys}</div>;
  }
}

export { Piano };
