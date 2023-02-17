import React from "react";
import { Key } from "./Key.js";
import "./Piano.css";
import { NOTES } from "../global/constants.js";
import _ from "lodash";

class Piano extends React.Component {
  render() {
    const keys = _.map(NOTES, (note, index) => {
      return <Key key={index} note={note.name} attribute={note.attribute} />;
    });

    return <div className="piano">{keys}</div>;
  }
}

export { Piano };
