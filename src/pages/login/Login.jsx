import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
//import { useNavigate } from "react-router-dom";
 //import {AuthContext} from "../../context/AuthContext"
import "./login.css";


const Login = ({setLog}) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navitage = useNavigate()

  const {dispatch} = useContext()  //AuthContext en el parentesis

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLog(true)
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        // navitage("/")
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;