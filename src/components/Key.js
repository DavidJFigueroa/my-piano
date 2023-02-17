import React from "react";
import "./Key.css";
import _ from "lodash";
import { notes } from "../global/constants.js";

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
  render() {
    let keyClassName = "key";
    // const noteIsFlat = notes.filter((x) => x.attribute == "flat");
    // console.log(noteIsFlat);

    // if (noteIsFlat) {
    //   keyClassName += " flat";
    // }
    // let key;

    // key = <div className={keyClassName}>
    // {
    //   notes
    //     .filter((x) => x.attribute == "flat")
    //     .map((attribute, index) => <div className={keyClassName}></div>);
    // }
    // </div>;

    // if (noteIsFlat) {
    //   key = <div className={keyClassName}></div>;
    // } else {
    //   key = (
    //     <div className={keyClassName}>
    //       <div className="key-text">{this.props.note.toUpperCase()}</div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <div>
          {notes
            .filter((x) => x.attribute == "flat")
            .map(() => (
              <div className={keyClassName + " flat"}></div>
            ))}
        </div>
        <div>
          {notes.map(() => (
            <div className={keyClassName}>
              <div className="key-text">{this.props.note.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    );
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
