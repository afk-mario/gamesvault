import PropTypes from 'prop-types';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';

import GameScreenshots from 'containers/game-screenshots';
import DeveloperName from 'containers/developer-name';

import { useGetGameById } from 'hooks/api/games';

function GameDetailsView({ id }) {
  const query = useGetGameById({ id });

  if (query.isLoading) return <Spinner />;

  const {
    data: {
      title,
      tagline,
      description,
      tags = [],
      developerWalletAddress,
      releaseDate,
      lockAddress,
      coverImage,
      icon,
      build,
      screenshots,
    },
  } = query;

  return (
    <Page>
      <p>icon: {icon || 'none'}</p>
      <p>screenshots: {screenshots || 'none'}</p>
      <p>build: {build || 'none'}</p>
      <p>coverImage: {coverImage}</p>
      <p>title: {title}</p>
      <p>tagline: {tagline}</p>
      <p>description: {description}</p>
      <p>releaseDate: {releaseDate}</p>
      <p>lockAddress: {lockAddress}</p>
      <p>developerWalletAddress: {developerWalletAddress}</p>
      <p>
        developer Name: <DeveloperName walletAddress={developerWalletAddress} />
      </p>
      {tags.length > 0 ? (
        <>
          <h2>Tags</h2>
          <ul>
            {tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        </>
      ) : (
        <p>No tags</p>
      )}
      {screenshots ? <GameScreenshots screenshots={screenshots} /> : null}
    </Page>
  );
}

GameDetailsView.propTypes = {
  id: PropTypes.string.isRequired,
};

GameDetailsView.defaultProps = {};

export default GameDetailsView;
