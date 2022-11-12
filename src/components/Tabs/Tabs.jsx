import { createContext, useState } from "react";

export const TabContext = createContext({
  activeTab: 0,
  setActiveTab: (tabIndex) => {},
});

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContext = {
    activeTab,
    setActiveTab: (tabIndex) => setActiveTab(tabIndex),
  };

  return (
    <TabContext.Provider value={tabContext}>{children}</TabContext.Provider>
  );
};
