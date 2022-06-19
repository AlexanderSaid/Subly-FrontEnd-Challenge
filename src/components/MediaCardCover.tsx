import EditCover from './EditCover';
import ErrorCover from './ErrorCover';
import Languages from './LanguageBadge';
import TranscribingBar from './TranscribingBar';

type MediumCover = {
  cover: string;
  languages: string[];
  status: string;
};

const MediaCardCover = ({ cover, languages, status }: MediumCover) => {
  return (
    <div className='cover-container'>
      <img src={cover} alt='cover' className='cover-background' />
      {status === 'transcribing' && <TranscribingBar />}
      {status === 'error' && <ErrorCover />}
      {status === 'ready' && (
        <>
          {languages.length > 1 && <Languages languages={languages.length} />}

          <EditCover status={status} />
        </>
      )}
    </div>
  );
};
export default MediaCardCover;
