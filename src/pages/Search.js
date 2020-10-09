import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Search.css";

function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchOutlined className="search_inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <Mic />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
