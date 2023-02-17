import React from "react";
import "./Key.css";
import _ from "lodash";
import { NOTES } from "../global/constants.js";

// class Key extends React.Component {
//   // noteIsFlat = (note) => {
//   //   return (note.name = "flat");
//   // };
//   render() {

//     return (
//       <div className="key">
//         <div className="key-text">{this.props.note.toUpperCase()}</div>
//       </div>
//     );
//   }
// }

class Key extends React.Component {
  // noteIsFlat = (note) => {
  //   return note.attribute == "flat";
  // };
  render() {
    let keyClassName = "key";
    // const noteIsFlat = this.props.note.attribute === "flat";
    // const noteIsFlat = this.noteIsFlat(this.props.note.attribute == "flat");

    if ({ NOTES }.attribute == "flat") {
      keyClassName += " flat";
    }
    let key;

    if ({ NOTES }.attribute == "flat") {
      key = <div className={keyClassName}></div>;
    } else {
      key = (
        <div className={keyClassName}>
          <div className="key-text">{this.props.note.toUpperCase()}</div>
        </div>
      );
    }
    return key;
  }
}

// class Key extends React.Component {
//   noteIsFlat = (note) => {
//     return note.length > 1;
//   };
//   render() {
//     let keyClassName = "key";
//     const noteIsFlat = this.noteIsFlat(this.props.note);

//     if (noteIsFlat) {
//       keyClassName += " flat";
//     }

//     let key;
//     if (noteIsFlat) {
//       key = <div className={keyClassName}></div>;
//     } else {
//       key = (
//         <div className={keyClassName}>
//           <div className="key-text">{this.props.note.toUpperCase()}</div>
//         </div>
//       );
//     }
//     return key;
//   }
// }

export { Key };
