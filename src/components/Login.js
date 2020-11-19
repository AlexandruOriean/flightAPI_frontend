import  React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function Login() {
    

    const { register, errors, handleSubmit } = useForm({});
    const History = useHistory();// return redirect that happens after a few seconds
    const [LoggedIn, setLoggedIn] = useState(false);

    const onSubmit = user => {
        axios
            .post("http://localhost:8080/users/login", user)
            .then((res) => {
                setLoggedIn(true);
                console.log(user);
                window.sessionStorage.setItem("login", user.username);
                setTimeout(() => {
                    History.push("/");
                
                },200)
            })
            .catch((err) => console.log(err));
    } 

    
    
    return (
        <div style={{ marginTop: "200px" , textAlign: "center"}}>
          
            <form onSubmit={(e) => e.preventDefault}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Username: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="username"
              placeholder="User name"
              ref={register({ required: true })}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password: </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              placeholder = "Password"
              ref={register({ required: true })}
                />
            </div>    
            </div>
            <div className="form-group row">
          <input
            type="submit"
            className="submit-register"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
            </form>
        </div>
    )
}
