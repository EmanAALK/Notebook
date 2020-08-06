import React from "react";
import { Route, Switch } from "react-router";

//Components
import Home from "../../components/home/index.js";
import NotebookList from "../NotebookList/index.js";
import NotebookDetail from "../NoteDetail/index.js";
import NoteDetail from "../../components/NoteDetail/index.js";
import NoteList from "../../components/NoteList/index.js";

//Stores
import notebookStore from "../../stores/notebookStore";

const Routes = () => {
  return (
    <Switch>
      <Route path='/notebooks/:notebookId'>
        <NotebookDetail />
      </Route>
      <Route path='/notebooks'>
        <NotebookList />
      </Route>
      <Route path='/notes/:noteId'>
        <NoteDetail />
      </Route>
      <Route path='/notes'>
        <NoteList notes={notebookStore.notebooks} />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
