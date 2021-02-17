import React from "react";

import { useGlobalValues } from "./context";

import SetupForm from "./components/SetupForm";
import Modal from "./components/Modal";
import SingleQue from "./components/SingleQue";
import Loading from "./components/Loading";

const App = () => {
  //
  const { isSetupOpen, loading, isModalOpen } = useGlobalValues();

  if (loading) {
    return <Loading />;
  }

  if (isModalOpen) {
    return <Modal />;
  }

  if (isSetupOpen) {
    return <SetupForm />;
  }

  return <SingleQue />;
};

export default App;
