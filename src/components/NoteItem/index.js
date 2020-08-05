import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Styles
// import { PlantWrapper } from "./styles";

const NoteItem = ({ note, deleteNote }) => {
  return (
    <>
      <Link to={`/notes/${note.slug}`}></Link>
      <p>{note.name}</p>
      <UpdateButton note={note} />
      <DeleteButton noteId={note.id} deleteNote={deleteNote} />
    </>
  );
};
export default observer(NoteItem);
