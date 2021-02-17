import React, { useState, useContext } from "react";

const AppContext = React.createContext(); // Povider - Consumer

const AppProvider = ({ children }) => {
  //
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [dropProps, setDropProps] = useState({
    page: "",
    location: { center: "200", bottom: "50" },
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openDrop = (page, location) => {
    setDropProps({ page, location });
    setIsDropOpen(true);
  };
  const closeDrop = () => {
    setIsDropOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isDropOpen,
        openDrop,
        closeDrop,
        dropProps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalState = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalState };
