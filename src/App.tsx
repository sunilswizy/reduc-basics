import  { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import searchRepositories from "./redux/repositories/action-creator";
import { Dispatch } from "redux";
import Lists from "./components/lists.component";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<Dispatch<any>>();

  const searchText = () => {
    if (!text) return;
    dispatch(searchRepositories(text));
    setText("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          value={text}
          className="input-box"
          onChange={(e) => setText(e.target.value)}
          placeholder="search"
        />
        <button className="App-link" onClick={searchText}>
          Search
        </button>

        <Lists />
      </header>
    </div>
  );
}

export default App;
