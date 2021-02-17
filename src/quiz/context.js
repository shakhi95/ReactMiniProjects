import React, { useState, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const initialFormData = {
  amount: "10",
  category: "sports",
  defficulty: "easy",
};

const AppProvider = ({ children }) => {
  //
  const [loading, setLoading] = useState(false);
  const [isSetupOpen, setIsSetupOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState({ visibility: "hidden", mssg: "test" });
  const [formData, setFormData] = useState(initialFormData);
  const [allQue, setAllQue] = useState([]);
  const [selectedQue, setSelectedQue] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const fetchQuestions = async () => {
    setLoading(true);
    setIsSetupOpen(false);

    const url = `https://opentdb.com/api.php?amount=${
      formData.amount
    }&category=${table[formData.category]}&difficulty=${
      formData.defficulty
    }&type=multiple`;

    const responde = await axios.get(url).catch((err) => console.log(err));

    if (responde) {
      const data = responde.data.results;
      if (data.length === 0) {
        setError({
          visibility: "visible",
          mssg: "Can't Generate Questions, Please Try Different Options",
        });
        setIsSetupOpen(true);
      } else {
        setAllQue(data);
        setSelectedQue(0);
        setCorrect(0);
        setWrong(0);
        setError({ visibility: "hidden", mssg: "test" });
      }
    } else {
      setError({
        visibility: "visible",
        mssg: "No Response From API, Try Again!",
      });
      setIsSetupOpen(true);
    }

    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        isSetupOpen,
        fetchQuestions,
        loading,
        error,
        isModalOpen,
        allQue,
        selectedQue,
        setSelectedQue,
        setIsModalOpen,
        correct,
        setCorrect,
        wrong,
        setWrong,
        setIsSetupOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalValues = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalValues };
