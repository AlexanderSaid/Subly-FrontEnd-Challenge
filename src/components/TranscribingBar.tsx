import '../css/transcribingBar.css';

const TranscribingBar = () => {
  return (
    <div className='transcribing-container'>
      <p className='transcribing-message'>Transcribing subtitles</p>
      <div className='transcribing-bar progress-bar stripes animated reverse slower'></div>
    </div>
  );
};

export default TranscribingBar;
