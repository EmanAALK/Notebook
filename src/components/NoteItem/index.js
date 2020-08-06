import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import UpdateButton from "../buttons/UpdateButton";

//Styles
// import { PlantWrapper } from "./styles";

const NoteItem = ({ note }) => {
  return (
    <>
      <Link to={`/notes/${note.id}`}></Link>
      <p>{note.name}</p>
      <UpdateButton note={note} />
    </>
  );
};
export default observer(NoteItem);
