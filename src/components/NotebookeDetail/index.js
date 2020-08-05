import React from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

//Store
import notebookStore from "../../stores/notebookStore";
import noteStore from "../../stores/noteStore";

const NotebookDetail = () => {
  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (_notebook) => _notebook.slug === notebookSlug
  );
};

const notes = notebook.notes
  .map((note) => noteStore.getNoteById(note.id))
  .filter((note) => note);

return (
  <>
    <h4>{notebook.name}</h4>
  </>
);

export default observer(NotebookDetail);
