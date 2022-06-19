import ErrorCover from './ErrorCover';
import TranscribingBar from './TranscribingBar';

type MediumCover = {
  cover: string;
  languages: string[];
  status: string;
};

const MediaCardCover = ({ cover, languages, status }: MediumCover) => {
  return (
    <div className='cover-container'>
      <img
        src={cover}
        alt='cover'
        className={`cover-background ${status === 'ready' ? 'ready' : ''}`}
      />
      {status === 'transcribing' && <TranscribingBar />}
      {status === 'error' && <ErrorCover />}
    </div>
  );
};
export default MediaCardCover;
