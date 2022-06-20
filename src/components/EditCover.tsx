import '../css/editCover.css';

type Status = {
  status: 'transcribing' | 'error' | 'ready';
};

const EditCover = ({ status }: Status) => {
  return (
    <div className={`edit-container ${status === 'ready' && 'ready'}`}>
      <button className='delete-icon' /* onClick functionality here */>
        <svg
          width='14'
          height='18'
          viewBox='0 0 14 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z'
            fill='#F2F2F2'></path>
        </svg>
      </button>

      <button className='edit-btn' /* onClick functionality here */>
        Edit
      </button>
    </div>
  );
};

export default EditCover;
