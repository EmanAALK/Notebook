import React from "react";
import { observer } from "mobx-react";

//Components
import NotebookItem from "../NotebookItem/index";

//Stores
import notebookStore from "../../stores/notebookStore/index";

//Styles
import { Title } from "./styles";

//buttons
import AddButton from "../buttons/AddButton";

const NotebookList = ({ notebook }) => {
  const notebookList = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  return (
    <>
      <AddButton />
      {notebookList}
    </>
  );
};

export default observer(NotebookList);
