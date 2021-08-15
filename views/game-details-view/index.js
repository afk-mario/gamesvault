import PropTypes from 'prop-types';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';

import GameScreenshots from 'containers/game-screenshots';
import DeveloperName from 'containers/developer-name';

import { useGetGameById } from 'hooks/api/games';
import GamePurchaseButton from 'containers/game-purchase-button';

import { parseAndFormatDate } from 'utils/date';

function GameDetailsView({ id }) {
  const query = useGetGameById({ id });

  if (query.isLoading) return <Spinner />;

  const {
    data: {
      title,
      description,
      tags = [],
      developerWalletAddress,
      releaseDate,
      lockAddress,
      build,
      screenshots,
    },
  } = query;

  return (
    <Page>
      <div className="container page-container main-container">
        <main className="main game-page">
          <ul className="breadcrumb">
            <li>
              <a href="/">Store</a>
            </li>
            <li>{title}</li>
          </ul>

          {screenshots ? <GameScreenshots screenshots={screenshots} /> : null}

          <div className="game-details-grid">
            <div className="game-details-cell">
              <span className="game-details-label">Developer</span>
              <span className="game-details-info">
                <DeveloperName walletAddress={developerWalletAddress} />
              </span>
              <span className="game-details-label">Release date</span>
              <span className="game-details-info">
                {parseAndFormatDate(releaseDate)}
              </span>
              <span className="game-details-label">Tags</span>
              <span className="game-details-info">
                <ul className="tags">
                  {tags.map((tag, i) => {
                    return <li key={i}>{tag}</li>;
                  })}
                </ul>
              </span>
            </div>
            <div className="game-details-cell game-details-description">
              <h1 className="page-header">{title}</h1>
              <p>{description}</p>
            </div>
            {lockAddress && (
              <div className="game-details-cell">
                <GamePurchaseButton lockAddress={lockAddress} build={build} />
              </div>
            )}
          </div>
        </main>
      </div>
    </Page>
  );
}

GameDetailsView.propTypes = {
  id: PropTypes.string.isRequired,
};

GameDetailsView.defaultProps = {};

export default GameDetailsView;
