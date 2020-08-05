import React, { useState } from "react";
import { observer } from "mobx-react";

//Component
import NoteItem from "../NoteItem/index";
import AddButton from "../buttons/AddButton.js";

//Stores
import noteStore from "../../stores/noteStore";

//Styles
import { ListWrapper } from "./styles";
import { PlusCircle } from "../buttons/styles";

const NoteList = ({ notes, deleteNote, selectNote }) => {
  const noteList = notes.map((note) => (
    <NoteItem
      note={note}
      key={note.id}
      deleteNote={deleteNote}
      selectNote={selectNote}
    />
  ));
  return (
    <>
      <>{noteList}</>
      <PlusCircle>
        <AddButton />
      </PlusCircle>
    </>
  );
};

export default observer(NoteList);
