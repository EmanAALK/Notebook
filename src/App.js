import React from "react";
import { observer } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Home from "./components/home/index";
import Routes from "./components/Routers/Routes";

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default observer(App);
