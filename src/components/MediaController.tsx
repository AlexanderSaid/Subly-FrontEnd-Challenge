import { useEffect, useState } from 'react';
import useSWR, { Key, Fetcher } from 'swr';

import { MediaProps } from './Media.type';
import '../css/userMedia.css';
import getUniqueLanguages from '../utils/extractUniqueLanguages';

import MediaCard from './MediaCard';
import Filters from './Filters';

const MediaController = () => {
  /**
   * It would be better to make the fetch in root route, but my limited knowledge of TypeScript prevent me from doing it.
   */

  const URL: Key =
    'https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b';
  const fetcher: Fetcher<MediaProps, string> = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(URL, fetcher);

  const uniqueLanguages = getUniqueLanguages(data);

  // States for filtering media
  const [selectedLanguages, setSelectedLanguages] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filteredMedia, setFilteredMedia] = useState(data?.media);

  useEffect(() => {
    if (!data) return;

    if (selectedLanguages === '' && selectedStatus === '') {
      setFilteredMedia(data?.media);
    }

    if (selectedLanguages !== '' || selectedStatus !== '') {
      const filteredData =
        selectedLanguages === ''
          ? data.media?.filter((medium) => medium.status === selectedStatus)
          : selectedStatus === ''
          ? data.media?.filter((medium) =>
              medium.languages.includes(selectedLanguages)
            )
          : data.media?.filter(
              (medium) =>
                medium.status === selectedStatus &&
                medium.languages.includes(selectedLanguages)
            );
      setFilteredMedia(filteredData);
    }

    return () => {};
  }, [data, selectedLanguages, selectedStatus]);

  return (
    <div className='user-media-wrapper'>
      {error && <div>Failed to load, try again later</div>}
      {!error && !data && <div>loading...</div>}
      {data && (
        <>
          <Filters
            languageList={uniqueLanguages}
            changeStatus={setSelectedStatus}
            changeLanguage={setSelectedLanguages}
          />

          <div className='media-container'>
            {filteredMedia?.map((medium) => (
              <MediaCard key={medium.id} medium={medium} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default MediaController;
