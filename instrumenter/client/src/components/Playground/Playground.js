import React from "react";
import styles from "./Playground.module.css";
import Users from "../Users/Users";

function Playground() {
  return (
    <div className={styles.component}>
      <Users />
    </div>
  );
}

export default Playground;
