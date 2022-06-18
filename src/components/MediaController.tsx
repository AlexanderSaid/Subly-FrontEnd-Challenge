import useSWR, { Key, Fetcher } from 'swr';
import { MediaProps } from './Media.type';
import MediaCard from './MediaCard';

const MediaController = () => {
  const URL: Key =
    'https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b';
  const fetcher: Fetcher<MediaProps, string> = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR(URL, fetcher);

  return (
    <>
      {error && <div>failed to load</div>}
      {!error && !data && <div>loading...</div>}
      {data && (
        <div className='container'>
          {data.media.map((medium) => (
            <MediaCard key={medium.id} medium={medium} />
          ))}
        </div>
      )}
    </>
  );
};
export default MediaController;
