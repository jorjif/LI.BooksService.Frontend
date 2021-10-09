import React from "react";
import "./App.scss";
import { StyledEngineProvider } from "@material-ui/styled-engine";
import AppRouter from "./components/appRouter/appRouter";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <AppRouter />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
