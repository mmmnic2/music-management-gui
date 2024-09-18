import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const MusicPlayerAction = ({ children, onClick }) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => onClick()}
    >
      <FontAwesomeIcon size="lg" icon={children} />
    </div>
  );
};
