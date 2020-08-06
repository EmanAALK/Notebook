import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
const NotebookItem = ({ notebook }) => {
  return (
    <Link to={`/notebooks/${notebook.id}`}>
      <h1>{notebook.name}</h1>
    </Link>
  );
};

export default observer(NotebookItem);
