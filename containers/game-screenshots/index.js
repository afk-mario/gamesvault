import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useGetFileQuery } from 'hooks/api/storage';

function GameScreenshots({ screenshots }) {
  const query = useGetFileQuery({ cid: screenshots });
  if (query.isLoading) {
    return <Spinner />;
  }
  const { data } = query;
  const baseUrl = `https://${screenshots}.ipfs.dweb.link`;

  let incr = 0;

  return (
    <div className="screenshots-grid">
      {data.map((file) => {
        const directUrl = `${baseUrl}/${file.name}`;
        incr += 1;
        const className = `screenshots-grid-item screenshot${incr}`;
        return (
          <>
            {/* {isImage ? <img src={directUrl} alt={file.name} /> : null} */}
            <div className={className} key={file}>
              <img src={directUrl} alt="" />
              {/* <a rel="noopener noreferrer" target="_blank" href={directUrl}>
                {file.name}
              </a> */}
            </div>
          </>
        );
      })}
    </div>
  );
}

GameScreenshots.propTypes = {
  screenshots: PropTypes.string.isRequired,
};

GameScreenshots.defaultProps = {};

export default GameScreenshots;
