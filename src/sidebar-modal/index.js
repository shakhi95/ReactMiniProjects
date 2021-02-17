import React from "react";

import App from "./App";
import { AppProvider } from "./conext";

const Index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default Index;
