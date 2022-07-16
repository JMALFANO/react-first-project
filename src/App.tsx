import React, { useState } from "react";
import { AppRoute } from "./router/AppRoute";
import { Context } from "./context/Context";
function App() {
  const [page, setPage] = useState("");
  return (
    <Context.Provider value={{ page, setPage }}>
      <AppRoute />
    </Context.Provider>
  );
}

export default App;
