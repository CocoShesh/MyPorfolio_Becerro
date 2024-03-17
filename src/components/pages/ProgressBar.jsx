export const ProgressBar = ({ progress }) => {
  const progressBarWidth = 300; // Example width of the progress bar in pixels
  const filledWidth = Math.round(progressBarWidth * progress);

  return (
    <div
      style={{
        width: progressBarWidth,
        height: 20,
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          width: `${filledWidth}px`,
          height: "100%",
          backgroundColor: "#007bff",
          borderRadius: "inherit",
          transition: "width 0.3s ease",
        }}
      ></div>
    </div>
  );
};

const formatTime = milliseconds => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const MusicPlayer = () => {
  const [progress, setProgress] = useState(0); // State to hold the progress percentage
  const [trackInfo, setTrackInfo] = useState(null); // State to hold track information

  // Simulate track data
  const trackData = {
    progress_ms: 111489, // Example progress in milliseconds
    duration_ms: 300000, // Example total duration in milliseconds
  };

  // Calculate progress percentage
  useEffect(() => {
    if (trackInfo) {
      const progressPercentage = trackData.progress_ms / trackData.duration_ms;
      setProgress(progressPercentage);
    }
  }, [trackInfo]);

  // Simulate fetching track data
  useEffect(() => {
    // Replace this with actual API call to fetch track data from Spotify
    // For demonstration purposes, we're using setTimeout to simulate async behavior
    setTimeout(() => {
      setTrackInfo(trackData);
    }, 1000); // Simulate 1 second delay
  }, []);

  return (
    <div>
      <h1>Music Player</h1>
      {trackInfo && (
        <>
          <div>
            Progress: {formatTime(trackData.progress_ms)} /{" "}
            {formatTime(trackData.duration_ms)}
          </div>
          <ProgressBar progress={progress} />
        </>
      )}
    </div>
  );
};
