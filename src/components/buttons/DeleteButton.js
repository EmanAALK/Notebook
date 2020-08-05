import React from "react";

//Stors
import noteStore from "../../stores/noteStore";

//Styles
import { DeleteButtonStyled } from "./styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    noteStore.deleteNote(props.noteId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
