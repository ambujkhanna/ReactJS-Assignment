import "./App.css";
import { useState } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [UserState, SetUserState] = useState({
    username: [{ say: "Hey,", name: "Steve Gartner" }],
  });

  const ChangeNameHandler = () => {
    SetUserState({
      username: [{ say: "What's up,", name: "Jordan Walke" }],
    });
  };

  const SwitchInputNameHandler = (event) => {
    SetUserState({
      username: [{ say: "What's up,", name: event.target.value }],
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Assignment- I</h1>
        <UserInput
          name={UserState.username[0].name}
          changed={SwitchInputNameHandler}
        ></UserInput>
        <fieldset>
          <legend>UserOutput</legend>
          <UserOutput
            say={UserState.username[0].say}
            name={UserState.username[0].name}
          ></UserOutput>
          <UserOutput click={ChangeNameHandler}></UserOutput>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
