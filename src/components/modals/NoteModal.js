import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import noteStore from "../../stores/noteStore";

//Styles
import { CreateButtonStyled } from "../../styles";
import { customStyles } from "./styles";

const NoteModel = ({ isOpen, closeModal, oldNote }) => {
  const [note, setNote] = useState(
    oldNote ?? {
      name: "",
      description: "",
      tag: "",
    }
  );

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore[oldNote ? "updateNote" : "createNote"](note);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Note Modal"
    >
      <h3>New Note</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={note.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            // required
            name="description"
            type="text"
            onChange={handleChange}
            className="form-control"
            value={note.description}
          />
        </div>
        <div className="form-group">
          <label>Tag</label>
          <input
            // required
            name="tag"
            type="file"
            onChange={handleChange}
            className="form-control"
            value={note.tag}
          />
        </div>
        <CreateButtonStyled>{oldNote ? "Update" : "Create"}</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NoteModel;
