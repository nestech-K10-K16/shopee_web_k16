import { useState } from "react";

export const useTabs = (initialTab = 0) => {
  const [tabIndex, setTabIndex] = useState(initialTab);
  const [activeTabs, setActiveTabs] = useState(
    new Array(6).fill(false).map((_, index) => index === initialTab)
  );

  const handleChange = (index) => {
    setTabIndex(index);
  };

  const userChange = (index) => {
    setTabIndex(index);

    const newActiveTabs = activeTabs.map((_, i) => i === index);
    setActiveTabs(newActiveTabs);
  };

  return {
    tabIndex,
    setTabIndex,
    activeTabs,
    handleChange,
    userChange,
  };
};
