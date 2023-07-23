import React, { useState } from "react";
import ReactDOM from "react-dom";
import SpellForm from './SpellForm';
import SpellList from './SpellList';

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [spells, setSpells] = useState([]);
  const [usersName, setuserName] = useState("");

  const addSpell = (spell) => {
    setSpells((prevSpells) => [...prevSpells, spell]);
  };

  const updateSpell = (updatedSpell) => {
    setSpells((prevSpells) =>
      prevSpells.map((spell) => (spell.id === updatedSpell.id ? updatedSpell : spell))
    );
  };

  const deleteSpell = (spellId) => {
    setSpells((prevSpells) => prevSpells.filter((spell) => spell.id !== spellId));
  };

 
 
  // User Login info
  const database = [
    {
      username: "starvikas2023",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      setuserName(uname.value);
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
      {isSubmitted ? <div className="title">Chatlog App
        </div>  : <div className="title">Sign In Chatlog App</div>}
        
        {isSubmitted ? <div>User is successfully logged in
          <><SpellForm addSpell={addSpell} usersName = {usersName} />
      <SpellList spells={spells} updateSpell={updateSpell} deleteSpell={deleteSpell} usersName = {usersName}/></>
        </div>  : renderForm}
      </div>
    </div>
  );
}

export default App;