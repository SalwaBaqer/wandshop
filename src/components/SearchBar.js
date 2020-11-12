import React from "react";

//from styles
import { SearchBarStyled, Searchtext } from "../styles";

const SearchBar = (props) => {
  return (
    <Searchtext>
      <SearchBarStyled
        placeholder="Search for a wand by wood"
        onChange={(event) => {
          props.setQuery(event.target.value);
        }}
      />
    </Searchtext>
  );
};
export default SearchBar;
