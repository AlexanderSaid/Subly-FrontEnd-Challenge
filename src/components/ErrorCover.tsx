import '../css/errorCover.css';

const ErrorCover = () => {
  return (
    <div className='error-container'>
      <div className='error-message'>
        <span className='material-symbols-outlined'>error</span>
        <p>
          An error occurred while processing your file.
          <br />
          Delete file to try again, and report issue if the problem persists.
        </p>
      </div>
      <div className='buttons-container'>
        <button className='btn btn-delete'>Delete file</button>
        <button className='btn btn-report'>Report issue</button>
      </div>
    </div>
  );
};
export default ErrorCover;
