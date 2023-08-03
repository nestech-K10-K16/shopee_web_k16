import { useState } from "react";

const UseAuthBlog = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (index) => {
    setTabIndex(index);
  };

  const [whiteActive, setWhiteActive] = useState(true);
  const [blackActive, setBlackActive] = useState(false);
  const [blackActive02, setBlackActive02] = useState(false);
  const [blackActive03, setBlackActive03] = useState(false);
  const [blackActive04, setBlackActive04] = useState(false);

  const userChange = (index) => {
    setTabIndex(index);
    if (index === 0) {
      setWhiteActive(true);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 1) {
      setWhiteActive(false);
      setBlackActive(true);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 2) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(true);
      setBlackActive03(false);
      setBlackActive04(false);
    } else if (index === 3) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(true);
      setBlackActive04(false);
    } else if (index === 4) {
      setWhiteActive(false);
      setBlackActive(false);
      setBlackActive02(false);
      setBlackActive03(false);
      setBlackActive04(true);
    }
  };

  return (
    tabIndex,
    setTabIndex,
    handleChange,
    whiteActive,
    blackActive,
    blackActive02,
    blackActive03,
    blackActive04,
    userChange
  );
};

export default UseAuthBlog;
