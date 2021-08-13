import PropTypes from 'prop-types';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';
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
    },
  } = query;

  return (
    <Page>
      <p>icon: {icon || 'none'}</p>
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
            {tags.map((tag) => {
              return <li>{tag}</li>;
            })}
          </ul>
        </>
      ) : null}
    </Page>
  );
}

GameDetailsView.propTypes = {
  id: PropTypes.string.isRequired,
};

GameDetailsView.defaultProps = {};

export default GameDetailsView;
