import React from "react";
import styles from "./App.module.css";
import Menu from "./components/Menu/Menu";
import Playground from "./components/Playground/Playground";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>Ponicode Test App</div>
      <div className={styles.container}>
        <Playground />
      </div>
    </div>
  );
}

export default App;
