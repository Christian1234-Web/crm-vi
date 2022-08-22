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
      idToDelete: [],
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
    const data = { note: x.content }
    const url = `note/update/${x.id}`;
    try {
      const rs = await request(url, 'PATCH', true, data);
      this.fetchNotes();
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
          this.updateNote(data);
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
    let check = document.getElementById(id);
    const NoteArrayCopy = [...this.state.NoteArray];
    const id_ = this.state.idToDelete;

    NoteArrayCopy.map((value, index) => {
      if (value.id === Number(id)) {
        if (check.checked === true) {
          let ids = id_.find(x => x === Number(id));
          if (!ids) {
            id_.push(Number(id));
          }
        }
        if (check.checked === false) {
          let i = id_.indexOf(Number(id))
          id_.splice(i, 1);
        }
      }
    });

  };

  handleRemove = async () => {
    const data = { ids: this.state.idToDelete };
    try {
      const url = `note/delete/many`;
      const rs = await request(url, 'POST', true, data);
      this.fetchNotes();
    } catch (err) {
      console.log(err);
    }
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
      if (rs.success === true || rs.notes.length === 0) {
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
