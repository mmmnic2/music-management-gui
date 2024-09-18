import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { MusicPlayerAction } from "./MusicPlayerAction";

export const MusicPlayerActions = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex text-white gap-2">
      <MusicPlayerAction onClick={onPrevious}>
        {faBackwardStep}
      </MusicPlayerAction>
      <MusicPlayerAction onClick={onPlayPause}>
        {(isPlaying && faPause) || faPlay}
      </MusicPlayerAction>
      <MusicPlayerAction onClick={onNext}>{faForwardStep}</MusicPlayerAction>
      <MusicPlayerAction>{faRepeat}</MusicPlayerAction>
      <MusicPlayerAction>{faShuffle}</MusicPlayerAction>
    </div>
  );
};
