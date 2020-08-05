import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "../buttons/DeleteButton";
import UpdateButton from "../buttons/UpdateButton";

//Stors
import noteStore from "../../stores/noteStore";

//styles
// import { DetailWrapper } from "./styles";

const NoteDetail = () => {
  const { noteSlug } = useParams();
  const note = noteStore.notes.find((note) => note.slug === noteSlug);
  if (!note) return <Redirect to='/notes' />;
  return (
    <>
      <Link to='/notes'>
        <p>Back to Notebook</p>
      </Link>
      <>
        <p>{note.name}</p>
        <p>{note.description}</p>
        <UpdateButton note={note} />
        <DeleteButton noteId={note.id} />
      </>
    </>
  );
};

export default observer(NoteDetail);
