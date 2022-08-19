import React from "react";

import ManageNote from "./ManageNote";
import NoteLists from "./NoteLists";
import NoteDetail from "./NoteDetail";

import "./style.css";
import { request } from "../../../services/utilities";
import { USER_NAME } from "../../../services/constants";
import SSRStorage from "../../../services/storage";
const storage = new SSRStorage();

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoteArray: [],
      shouldNavNewNote: false,
      shouldReadyForTrash: false,
      passEditNote: {},
    };
  }
  saveNote = async (x) => {
    const user = await storage.getItem(USER_NAME);
    const data = { note: x.content, userId: user.id }
    const url = `note/add`;
    try {
      const rs = await request(url, 'POST', true, data);
      this.fetchNotes();
    } catch (err) {
      console.log(err);
    }
  }
  updateNote = async (x) => {
    const user = await storage.getItem(USER_NAME);

    const data = { note: x.content, userId: user.id }
    const url = `note/add`;
    try {
      const rs = await request(url, 'POST', true, data);
    } catch (err) {
      console.log(err);
    }
  }

  handleBack = (data) => {
    const NoteArrayCopy = [...this.state.NoteArray];
    if (
      data.content !== null &&
      data.content !== undefined &&
      data.content !== ""
    ) {
      let isNoteExist = true;
      this.state.NoteArray.forEach((note, index) => {
        // edit note
        if (note.id === data.id) {
          // update note
          NoteArrayCopy[index].content = data.content;
          NoteArrayCopy[index].textContent = data.textContent;
          isNoteExist = false;
        }
      });
      if (isNoteExist) {
        // save note
        this.saveNote(data);
        NoteArrayCopy.push(data);
      }
    }
    this.setState({
      // NoteArray: [...NoteArrayCopy],
      shouldNavNewNote: false
    });
  };



  handleNewNote = () => {
    this.setState({
      shouldNavNewNote: true,
      passEditNote: {},
    });
  };

  handleCheck = (id) => {
    //change checkbox status on click
    const NoteArrayCopy = [...this.state.NoteArray];
    let count = 0;
    NoteArrayCopy.map((value, index) => {
      if (value.id === id) {
        return (value.checkBoxCheckStatus = !value.checkBoxCheckStatus);
      }
      return (count = index);
    });
    if (NoteArrayCopy.length - 1 === count) {
      this.setState({
        NoteArray: [...NoteArrayCopy],
      });
    }
  };

  handleRemove = () => {
    let copyNoteArray = [...this.state.NoteArray];
    let newArray = copyNoteArray.filter((value) => {
      if (!value.checkBoxCheckStatus) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({
      NoteArray: [...newArray],
    });
  };

  handleReadyTrash = () => {
    this.setState({
      shouldReadyForTrash: !this.state.shouldReadyForTrash,
    });
  };

  handleEditNoteNav = (id) => {
    this.state.NoteArray.forEach((value, index) => {
      if (id === value.id.toString()) {
        this.setState({
          passEditNote: this.state.NoteArray[index],
          shouldNavNewNote: true,
        });
      }
    });

  };

  fetchNotes = async () => {
    const user = await storage.getItem(USER_NAME);
    try {
      const url = `note/?userId=${user.id}`
      const rs = await request(url, 'GET', true);
      // console.log(rs);
      if (rs.success === true) {
        this.setState({
          NoteArray: [...rs.notes],
          shouldNavNewNote: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchNotes();
  }

  render() {
    return (
      <div
        className={`view-port clearfix quickview-notes ${this.state.shouldNavNewNote ? "push" : ""
          }`}
        id="note-views"
      >
        {/* BEGIN Note List */}
        <div className="view list" id="quick-note-list">
          {/* BEGIN ADD or DELETE note action tab */}
          <ManageNote
            onRemove={this.handleRemove}
            onAdd={this.handleNewNote}
            readyTrash={this.handleReadyTrash}
            shouldTrash={this.state.shouldReadyForTrash}
          />
          {/* END ADD or DELETE note action tab */}
          {this.state.NoteArray.length === 0 ? (
            <p className="note-add-placeholder">Press '+' to add Note</p>
          ) : (
            <NoteLists
              list={[...this.state.NoteArray]}
              check={this.handleCheck}
              trash={this.state.shouldReadyForTrash}
              editNav={this.handleEditNoteNav}
            />
          )}
        </div>
        {/* END Note List */}
        <div className="view note" id="quick-note">
          <NoteDetail
            onBack={this.handleBack}
            newContent={this.state.passEditNote}
          />
        </div>
      </div>
    );
  }
}

export default Component;
