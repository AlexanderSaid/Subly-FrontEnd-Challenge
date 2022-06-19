import { MediumProps } from './Media.type';
import MediaCardCover from './MediaCardCover';
import MediaCardStatus from './MediaCardStatus';

type Medium = {
  medium: MediumProps;
};
const MediaCard = ({ medium }: Medium) => {
  return (
    <div
      className='media-card-container'
      style={medium.status === 'ready' ? { cursor: 'pointer' } : {}}>
      <MediaCardCover
        cover={medium.cover}
        languages={medium.languages}
        status={medium.status}
      />
      <MediaCardStatus
        name={medium.name}
        status={medium.status}
        updated={medium.updatedAt}
      />
    </div>
  );
};
export default MediaCard;
