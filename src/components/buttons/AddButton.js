import React, { useState } from "react";

//Components
import NoteModal from "../modals/NoteModal.js";

//Styles
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createNote }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle onClick={openModal} />

      <NoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        createNote={createNote}
      />
    </>
  );
};

export default AddButton;
