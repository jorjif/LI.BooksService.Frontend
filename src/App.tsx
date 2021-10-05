import React from "react";
import "./App.scss";
import PageFrame from "./components/pageFrame/pageFrame";
import MainPage from "./components/mainPage/mainPage";
import { StyledEngineProvider } from "@material-ui/styled-engine";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <PageFrame>
          <MainPage />
        </PageFrame>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
