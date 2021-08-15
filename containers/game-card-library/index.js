import PropTypes from 'prop-types';

import DeveloperName from 'containers/developer-name';
import { useGetGameByLock } from 'hooks/api/games';
import { useGetHasValidKeyQuery } from 'hooks/api/unlock';

function GameCardLibrary({ lockAddress }) {
  const query = useGetGameByLock({ lockAddress });

  const getValidKey = useGetHasValidKeyQuery({ lockAddress });
  const hasValidKey = getValidKey.data;
  const validKeyIsLoading = getValidKey.isLoading;

  if (query.isLoading) return null;

  if (query.data.length === 0) return null;

  if (validKeyIsLoading || !hasValidKey) return null;

  const {
    data: {
      0: { title, developerWalletAddress, coverImage, build },
    },
  } = query;

  return (
    <div className="cell">
      <img src={coverImage} alt={`${title} cover`} className="game-cover" />
      <form className="library-download-form" method="get" action={build}>
        <button type="submit">Download</button>
      </form>
      <span className="game-details">
        <span className="game-info">
          <h2 className="game-title">{title}</h2>
          <h3 className="game-developer">
            <DeveloperName walletAddress={developerWalletAddress} />
          </h3>
        </span>
      </span>
    </div>
  );
}

GameCardLibrary.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

GameCardLibrary.defaultProps = {};

export default GameCardLibrary;
