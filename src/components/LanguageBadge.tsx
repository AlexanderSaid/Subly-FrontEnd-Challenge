import '../css/languageBadge.css';
type LanguagesLength = {
  languages: number;
};

const Languages = ({ languages }: LanguagesLength) => {
  return (
    <div className='badge-container'>
      <div className='badge-card'>
        <div className='badge-card-icon'>
          <svg
            width='17'
            height='16'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 8.85H2.85V8H4.15V8.85H7.5V10.15H6.09697C5.93441 11.1849 5.4062 12.3279 4.62434 13.2661C4.53556 13.3727 4.44284 13.4773 4.3463 13.5796C4.81883 13.9683 5.29495 14.2465 5.70555 14.3834L5.29445 15.6166C4.64583 15.4004 3.96867 14.9785 3.34873 14.438C2.54736 14.9886 1.58727 15.35 0.5 15.35V14.05C1.20178 14.05 1.8497 13.8408 2.42282 13.4901C1.76502 12.7014 1.21851 11.754 0.969407 10.7576L2.23059 10.4424C2.42242 11.2097 2.86129 11.9874 3.42485 12.6619C3.49371 12.588 3.56067 12.5119 3.62566 12.4339C4.23059 11.708 4.62079 10.869 4.77506 10.15H3.5H0V8.85Z'
              fill='currentColor'></path>
            <path
              d='M11.1513 7.49999L11.7514 5.70667H14.4858L15.0895 7.49999H16.4958L13.9318 0.227264H12.3054L9.74506 7.49999H11.1513ZM12.1066 4.64843L13.0902 1.71874H13.147L14.1307 4.64843H12.1066Z'
              fill='currentColor'></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M13.4421 9.01447C13.4421 10.1855 13.0856 11.1044 12.4637 11.7261C12.0292 12.1606 11.4235 12.4912 10.625 12.6435V11.8345L8 13.35L10.625 14.8655V14.0863C11.7477 13.914 12.6895 13.4599 13.4019 12.7477C14.3555 11.7943 14.8126 10.4633 14.8126 8.9855L13.4421 9.01447Z'
              fill='currentColor'></path>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.55792 5.85107C3.55793 4.68008 3.91444 3.7611 4.53628 3.1394C4.97084 2.70494 5.57646 2.37432 6.375 2.22208L6.375 3.03108L9 1.51554L6.375 -4.99786e-06L6.375 0.779289C5.25227 0.951565 4.31046 1.40565 3.59814 2.1178C2.64453 3.07119 2.18736 4.40223 2.18736 5.88003L3.55792 5.85107Z'
              fill='currentColor'></path>
          </svg>
        </div>
        <p className='caption'>{`${languages} languages`}</p>
      </div>
    </div>
  );
};
export default Languages;
