import React, { useState, useEffect } from "react";
import styles from "./Users.module.css";
import api from "./../../utils/api";
import { FaCheck, FaTimes } from "react-icons/fa";

const acceptableAge = [];
for (var i = 0; i <= 100; i++) {
  acceptableAge.push(i);
}

function Users() {
  const [users, setUsers] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  useEffect(() => {
    getUsers(minAge, maxAge);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getUsers(minAge, maxAge) {
    if (minAge === "") {
      setMinAge("0");
    }
    if (maxAge === "") {
      setMaxAge("100");
    }
    api
      .get("/users", {
        params: {
          minAge: minAge || "0",
          maxAge: maxAge || "100"
        }
      })
      .then(res => {
        if (res.status === 200) {
          setUsers(res.data.users);
        } else {
          console.log(res.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function checkEmailIsValid(email) {
    api
      .post("/email", {
        email
      })
      .then(res => {
        if (res.status === 200) {
          const newUsers = users.map(x =>
            x.email === email ? { ...x, isEmailValid: res.data.isValid } : x
          );
          setUsers(newUsers);
        } else {
          console.log(res.error);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  function setMinAgeHandler({ target }) {
    const value = target.value;
    if (
      value === "" ||
      ((value === isNaN(value)) === false &&
        acceptableAge.includes(parseInt(value)))
    ) {
      setMinAge(target.value);
    }
  }

  function setMaxAgeHandler({ target }) {
    const value = target.value;
    if (
      value === "" ||
      ((value === isNaN(value)) === false &&
        acceptableAge.includes(parseInt(value)))
    ) {
      setMaxAge(target.value);
    }
  }

  return (
    <div className={styles.component}>
      <div className={styles.filter}>
        <p>
          min age:{" "}
          <input type={"number"} value={minAge} onChange={setMinAgeHandler} />
        </p>
        <p>
          max age:{" "}
          <input type={"number"} value={maxAge} onChange={setMaxAgeHandler} />
        </p>
        <p
          className={styles.filterButton}
          onClick={() => getUsers(minAge, maxAge)}
        >
          FILTER USERS
        </p>
      </div>
      <div className={styles.usersSection}>
        {users.map((x, i) => (
          <div className={styles.userBlock} key={i}>
            <div className={styles.userName}>{x.name}</div>
            <div>
              <span className={styles.header}>age: </span>
              {x.age}
            </div>

            <div>
              <span className={styles.header}>email: </span>
              {x.email}
              <span className={styles.emailValidIcon}>
                {x.isEmailValid !== undefined &&
                  (!!x.isEmailValid ? (
                    <FaCheck color={"green"} />
                  ) : (
                    <FaTimes color={"red"} />
                  ))}
              </span>
              <span
                className={styles.checkEmailButton}
                onClick={() => checkEmailIsValid(x.email)}
              >
                Check email validity
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
