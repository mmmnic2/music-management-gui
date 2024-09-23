import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VolumeControl = ({ volume, onVolumeChange, onMute, isMute }) => {
  return (
    <div className="flex items-center">
      <div
        className="text-gray-500 cursor-pointer "
        onClick={onMute}
      >
        <FontAwesomeIcon icon={(isMute && faVolumeXmark) || faVolumeHigh} />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-32 h-2 bg-gray-700 rounded-lg ml-2 appearance-none cursor-pointer"
      />
    </div>
  );
};

export default VolumeControl;
