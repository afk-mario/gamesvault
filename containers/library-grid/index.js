// import PropTypes from 'prop-types';

import axios from 'axios';

// import { useGetAllGamesQuery } from 'hooks/api/games';

// import Spinner from 'components/spinner';
// import Empty from 'components/empty';

// import GameCard from 'containers/game-card';
// import { version } from 'react';

function LibraryGrid() {
  axios
    .post('https://api.thegraph.com/subgraphs/name/aave/protocol', {
      query: `
    {
      flashLoans(first: 10, orderBy: timestamp, orderDirection: desc) {
        id
        reserve {
          name
          symbol
        }
        amount,
        target,
        timestamp
      }
    }  
    `,
    })
    .then((res) => {
      res.data.data.flashLoans.forEach((flashsloan) => {
        console.log(flashsloan);
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return <></>;
  /*
  const { data, isLoading } = useGetAllGamesQuery();

  if (isLoading) return <Spinner />;

  if (!data || data?.length === 0) {
    return <Empty message="No Games" />;
  }
  return (
    <section className="main-content grid">
      {data.map((item) => {
        const { _id: id } = item;
        return (
          <GameCard
            key={id}
            gameId={id}
            gameTitle={item.title}
            gamePrice={0}
            developerWalletAddress={item.developerWalletAddress}
            imgUrl={item.coverImage}
          />
        );
      })}
    </section>
  );
  */
}

LibraryGrid.propTypes = {};

LibraryGrid.defaultProps = {};

export default LibraryGrid;
