import React from "react";

function Search({ setSearchInput }) {
  const onChangeInputHandler = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChangeInputHandler} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
