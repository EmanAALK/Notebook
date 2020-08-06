import React, { useState } from "react";

//Components
import NoteModal from "../modals/NoteModal.js";
import NotebookModal from "../modals/NotebookModal.js";

//Styles
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ note, notebook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle onClick={openModal} />

      {notebook ? (
        <NoteModal isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <NotebookModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
