import editedDate from '../utils/editedDate'; // a function that returns the edited date since last update

type MediumStatus = {
  name: string;
  status: string;
  updated: string;
};

const MediaCardStatus = ({ name, status, updated }: MediumStatus) => {
  return (
    <div className='status-container'>
      <h6 className='status-title'>{name}</h6>
      <span className='status-info'>
        {status === 'error'
          ? 'Error in processing'
          : status === 'transcribing'
          ? 'Transcribing'
          : `Edited ${editedDate(updated)}`}
      </span>
    </div>
  );
};

export default MediaCardStatus;
