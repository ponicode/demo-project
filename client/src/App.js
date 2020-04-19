import React from "react";

import Playground from "./components/Playground/Playground";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles/ponicode-bootstrap.css";

import styles from "./App.module.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} height={32} alt="Ponicode" />
      <div className={styles.header}>Ponicode Test App</div>
      <div className={styles.container}>
        <Playground />
      </div>
    </div>
  );
}

export default App;
