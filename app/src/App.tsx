import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Login() {
  return (
    <>
      <main>
        <h2>Welcome Gamer!</h2>
        <p>This is the login screen. Login via SMS</p>
      </main>
      <nav>
        <p>Not registered? Click here to signup!</p>
        <Link to="/signup">Signup</Link>
      </nav>
    </>
  );
}

function SignUp() {
  return (
    <>
      <main>
        <h2>Register</h2>
        <p>
          Here we ask for phone. Verify phone. Ask for username. create gamer &
          navigate to /home
        </p>
      </main>
      <nav>
        <Link to="/">Login</Link>
      </nav>
    </>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Logout</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
