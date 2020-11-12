import { useState } from "react";

// Style
import { ListWrapper } from "../styles";

//Components
import WandItem from "./WandItem";
import SearchBar from "./SearchBar";

const WandList = (props) => {
  const [query, setQuery] = useState("");

  const filteredWands = props.wands.filter((wand) => {
    if (wand.wood.toLowerCase().includes(query.toLowerCase())) {
      return true;
    } else return false;
  });

  const wandsList = filteredWands.map((wand) => (
    <WandItem wand={wand} setWand={props.setWand} key={wand.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper> {wandsList}</ListWrapper>
    </>
  );
};

export default WandList;
