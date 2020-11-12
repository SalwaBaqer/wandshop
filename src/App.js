import "./App.css";

//from React
import { useState } from "react";
import { Route, Switch } from "react-router";

import wands from "./wands";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

//Components
import WandList from "./components/WandList";
import WandDetail from "./components/WandDetail";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const theme = {
  mainColor: "white",
  backgroundColor: "#10141b",
  blue: "white",
  itemBorder: "#10141b",
  buttoncolor: "#A8A681",
  recommendationColor: "#A8A681",
};

function App() {
  const [_wands, setWands] = useState(wands);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Switch>
          {/* wands details */}
          <Route path="/wands/:wandId">
            <WandDetail wands={_wands} />
          </Route>

          {/* wands list */}
          <Route path="/wands">
            <WandList wands={_wands} setWand={setWands} />
          </Route>

          <Route path="/">
            <>
              <Home />
            </>
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
