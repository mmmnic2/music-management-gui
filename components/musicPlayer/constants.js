import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

export const musicPlayerIcons = [
  {
    id: "prevBtn",
    icon: faBackwardStep,
    name: "Previous song",
  },
  {
    id: "playBtn",
    icon: faPlay,
  },
  {
    id: "nextBtn",
    icon: faForwardStep,
    name: "Next song",
  },
  {
    id: "shuffleBtn",
    icon: faShuffle,
    name: "Shuffle song",
  },
  {
    id: "repeatBtn",
    icon: faRepeat,
    name: "Repeat song",
  },
];
