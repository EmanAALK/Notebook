import React, { useState } from "react";

// Components
import NoteModal from "../modals/NoteModal";

// Styling
import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <NoteModal isOpen={isOpen} closeModal={closeModal} oldNote={note} />
    </>
  );
};

export default UpdateButton;
