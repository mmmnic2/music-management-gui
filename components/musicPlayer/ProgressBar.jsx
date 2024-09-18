const ProgressBar = ({ currentTime, duration, onTimeChange }) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime || 0}
        onChange={(e) => onTimeChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none"
      />

      <div className="flex justify-between w-full text-gray-300 text-sm mt-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  if (isNaN(time) || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default ProgressBar;
