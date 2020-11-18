import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, errors, handleSubmit, watch } = useForm({});

  const [registrationMessage, setRegistrationMessage] = useState();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (user) => {
    axios
      .post("https://localhost:8080/users/register", user)
      .then((res) => {
        if (res.status === 200) {
          setRegistrationMessage(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <form onSubmit={(e) => e.preventDefault}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="User name"
            ref={register({ required: true })}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="name@domain.com"
            ref={register({ required: true })}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password: </label>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            ref={register({
              required: true,
              validate: (value) =>
                value === password.current || "Password don't match",
            })}
          />
        </div>

        <div className="form-group row">
          <input
            type="submit"
            className="submit-register"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>

      {/* <form>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
<div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Checkbox</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form> */}
    </div>
  );
}
