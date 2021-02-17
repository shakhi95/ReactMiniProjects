import React from "react";

import App from "./App";
import { AppProvider } from "./context";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Index;
