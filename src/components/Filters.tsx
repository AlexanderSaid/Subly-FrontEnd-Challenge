import '../css/filters.css';
import { useRef } from 'react';

type FilterProps = {
  languageList: string[];
  changeStatus: (status: string) => void;
  changeLanguage: (language: string) => void;
};

const Filters = ({
  languageList,
  changeStatus,
  changeLanguage,
}: FilterProps) => {
  const statusList = ['ready', 'error', 'transcribing'];

  const languageRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);

  // Reset the filters
  const handleAllClicked = () => {
    changeStatus('');
    changeLanguage('');
    if (languageRef.current) {
      languageRef.current.options[0].selected = true;
    }
    if (statusRef.current) {
      statusRef.current.options[0].selected = true;
    }
  };

  const handleStatusSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeStatus(e.target.value);
  };
  const handleLanguageSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };
  /**
   * This component can be split into controller and smaller components where select element can be reused if there are more filtering options.
   */
  return (
    <div className='filters-container'>
      <div className='filters-wrapper'>
        <button onClick={handleAllClicked} className='show-all-btn btn-report'>
          Show All
        </button>

        <div className='select-box'>
          <label htmlFor='language-select'>Select Language</label>
          <select
            name='languages'
            id='language-select'
            className='select'
            onChange={(e) => handleLanguageSelected(e)}
            ref={languageRef}>
            <option value=''>All</option>
            {languageList.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div className='select-box'>
          <label htmlFor='status-select'>Select Status</label>
          <select
            name='status'
            id='status-select'
            className='select'
            onChange={(e) => handleStatusSelected(e)}
            ref={statusRef}>
            <option value=''>All</option>
            {statusList.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filters;
