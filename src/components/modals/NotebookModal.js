import React, { useState } from "react";
import Modal from "react-modal";

//Stores
import notebookStore from "../../stores/notebookStore";

//Styles
import { CreateButtonStyled } from "../../styles";
import { customStyles } from "./styles";

const NotebookModel = ({ isOpen, closeModal, oldNotebook }) => {
  const [notebook, setNote] = useState(
    oldNotebook ?? {
      name: "",
      description: "",
    }
  );

  const handleChange = (event) => {
    setNote({ ...notebook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore[oldNotebook ? "updateNotebook" : "createNotebook"](notebook);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Notebook Modal'
    >
      <h3>New Notebook</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-group row'>
          <div className='col-6'>
            <label>Name</label>
            <input
              required
              name='name'
              type='text'
              onChange={handleChange}
              className='form-control'
              value={notebook.name}
            />
          </div>
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input
            // required
            name='description'
            type='text'
            onChange={handleChange}
            className='form-control'
            value={notebook.description}
          />
        </div>
        <CreateButtonStyled>
          {oldNotebook ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default NotebookModel;
