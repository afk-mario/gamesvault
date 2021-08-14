import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useGetFileQuery } from 'hooks/api/storage';

function isFileImage(file) {
  const { name } = file;
  const fileExt = name.split('.').pop();
  return fileExt === 'jpg' || fileExt === 'png' || fileExt === 'svg';
}

function GameScreenshots({ screenshots }) {
  const query = useGetFileQuery({ cid: screenshots });
  console.log(screenshots);
  if (query.isLoading) {
    return <Spinner />;
  }
  const { data } = query;
  const baseUrl = `https://${screenshots}.ipfs.dweb.link`;

  return (
    <div>
      <hr />
      <h1>Screenshots</h1>
      {data.map((file) => {
        const isImage = isFileImage(file);
        const directUrl = `${baseUrl}/${file.name}`;
        return (
          <article key={`${file.cid}-${file.name}`}>
            {isImage ? <img src={directUrl} alt={file.name} /> : null}
            <div>
              <a rel="noopener noreferrer" target="_blank" href={directUrl}>
                {file.name}
              </a>
            </div>
          </article>
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
