import React from "react";
import "./App.scss";
import PageFrame from "./components/pageFrame/pageFrame";
import MainPage from "./components/mainPage/mainPage";
import { StyledEngineProvider } from "@material-ui/styled-engine";
import Registration from "./components/registerPage/registration";
import AuthorizationPage from "./components/authorizationPage/authorization";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <PageFrame>
          <AuthorizationPage />
        </PageFrame>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
