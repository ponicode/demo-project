import React, { useState, useEffect } from "react";
import styles from "./Users.module.css";
import api from "./../../utils/api";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Table, Button, Form, Col } from "react-bootstrap";

const acceptableAge = [];
for (var i = 0; i <= 100; i++) {
  acceptableAge.push(i);
}

function Users() {
  const [users, setUsers] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getUsers() {
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

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      getUsers();
    }
  }

  function resetFilters() {
    setMinAge("0");
    setMaxAge("100");
  }

  function getEmailValidationIcon(user) {
    return (
      <span className={styles.emailValidIcon}>
        {user.isEmailValid !== undefined &&
          (!!user.isEmailValid ? (
            <FaCheck color={"green"} />
          ) : (
            <FaTimes color={"red"} />
          ))}
      </span>
    );
  }

  return (
    <div className={styles.component}>
      <div className={styles.filter}>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Minimum age</Form.Label>
              <Form.Control
                type={"number"}
                value={minAge}
                onChange={setMinAgeHandler}
                onKeyDown={handleKeyDown}
                placeholder="Enter minimum age"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Maximum age</Form.Label>
              <Form.Control
                type={"number"}
                value={maxAge}
                onChange={setMaxAgeHandler}
                onKeyDown={handleKeyDown}
                placeholder="Enter maximum age"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="warning" size="sm" onClick={resetFilters}>
            Reset
          </Button>{" "}
          <Button variant="primary" size="sm" onClick={getUsers}>
            Filter
          </Button>
        </Form>
      </div>
      <div className={styles.usersSection}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  {user.address && `${user.address.road}, ${user.address.city}`}
                </td>
                <td>{user.age}</td>
                <td>
                  {user.email}
                  {getEmailValidationIcon(user)}
                </td>
                <td>
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => checkEmailIsValid(user.email)}
                    disabled={user.isEmailValid !== undefined}
                  >
                    Check email validity
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Users;
