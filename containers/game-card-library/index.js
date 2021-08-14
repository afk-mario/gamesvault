import PropTypes from 'prop-types';

import DeveloperName from 'containers/developer-name';
import { useGetGameByLock } from 'hooks/api/games';

function GameCardLibrary({ lockAddress }) {
  const query = useGetGameByLock({ lockAddress });

  if (query.isLoading) return <></>;

  if (query.data.length > 0) {
    const {
      data: {
        0: { title, developerWalletAddress, coverImage, build },
      },
    } = query;

    return (
      <>
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
      </>
    );
  }

  return <></>;
}

GameCardLibrary.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

GameCardLibrary.defaultProps = {};

export default GameCardLibrary;
