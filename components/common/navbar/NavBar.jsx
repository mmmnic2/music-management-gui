import {
  faBarsStaggered,
  faBookmark,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tooltip from "../Tooltip";

const navIcons = [
  {
    name: "Home",
    icon: faHouse,
  },
  {
    name: "My Library",
    icon: faBookmark,
  },
  {
    name: "Favorite",
    icon: faHeart,
  },
  {
    name: "Current Playlist",
    icon: faBarsStaggered,
  },
];

export const NavBar = () => {
  return (
    <nav className="glassmorphism flex flex-col items-center gap-4 py-4 px-2">
      {navIcons.map((nav) => (
        <Tooltip key={nav.name} content={nav.name}>
          <button className="text-white">
            <FontAwesomeIcon icon={nav.icon} />
          </button>
        </Tooltip>
      ))}
    </nav>
  );
};
