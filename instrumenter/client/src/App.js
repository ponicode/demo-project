import React from "react";

import Playground from "./components/Playground/Playground";

import "bootstrap/dist/css/bootstrap.min.css";
import "./common/styles/ponicode-bootstrap.css";

import styles from "./App.module.css";
import logo from "./images/logo.svg";

// Demo function, do right click and "Ponicode: Unit Test"
export function isEmailValid(email) {
  if (typeof email !== "string") {
    return false;
  }
  const unicodePattern = /[^\x00-\x7F]/;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !unicodePattern.test(email) && re.test(email.toLowerCase());
}

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
