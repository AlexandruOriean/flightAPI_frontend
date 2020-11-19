import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";



export default function Register() {
  const { register, errors, handleSubmit, watch } = useForm({});

  const [registrationMessage, setRegistrationMessage] = useState();
  const password = useRef({});
  const History = useHistory(); // return redirect that happens after a few seconds
  password.current = watch("password", "");

  const onSubmit = (user) => {
    axios
      .post("http://localhost:8080/users/register", user)
      .then((res) => {
        if (res.status === 200) {
          setRegistrationMessage(res.data);
          window.sessionStorage.setItem("login", user.username);
          setTimeout(() => {
            History.push("/login");
          }, 200);
        }
      })
      .catch((err) => console.log(err));
  };

  const rootChange = () => {
    let path = `/login`;
    History.push(path);
  }
  return (
    <Container
      className="col-sm-2 col-form-label"
      style={{ marginTop: "100px", marginBottom: "50px" }}
    >
      <Form onSubmit={(e) => e.preventDefault}>
        <Form.Group controlId="formBasicName">
          <Form.Label className="col-sm-2 col-form-label">Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={register({ required: true })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            ref={register({
              required: true,
              validate: (value) =>
                value === password.current || "Password don't match",
            })}
          />
        </Form.Group>
        <Link to={"/login"}>
          <Button
            variant="primary"
            type="submit"
            className="submit-register"
            onClick={handleSubmit(onSubmit)}
            
          >
            Submit
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
