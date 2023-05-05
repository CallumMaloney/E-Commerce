import React, { useRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchInput.css"

function SearchInput({ inputValue, setInputValue, handleResetClick }) {
  const inputRef = useRef(null);

  function handleInput(event) {
    setInputValue(event.target.value)
  }

  function handleReset() {
    setInputValue("");
    inputRef.current.value = "";
  }


  return (
    <div className="search">
      <label htmlFor="si" className="search__input-label">
        <SearchIcon className="search__input-icon" />
      </label>
      <input
        type="text"
        placeholder="Search..."
        id="si"
        className="search__input"
        onChange={handleInput}
        ref={inputRef}
      />
      <button className="search-reset" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default SearchInput;