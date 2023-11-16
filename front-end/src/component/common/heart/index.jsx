import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heart = () => {
  const [heart, setHeart] = useState(false);

  return (
    <FontAwesomeIcon
      icon="fa-solid fa-heart"
      size="xl"
      style={{ color: heart ? "red" : "black" }}
      onClick={() => setHeart(!heart)}
    />
  );
};

export default Heart;
