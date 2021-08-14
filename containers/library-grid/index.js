import { useEthers } from '@usedapp/core';

import Spinner from 'components/spinner';
import GameCardLibrary from 'containers/game-card-library';

import { useGetAllOwnedLocks } from 'hooks/api/thegraph';

function LibraryGrid() {
  const { account } = useEthers();

  const query = useGetAllOwnedLocks({
    account,
  });

  const ownedLocks = query.data;

  return (
    <section className="main-content grid library">
      {query.isLoading ? (
        <Spinner />
      ) : (
        <>
          {ownedLocks.map((item) => {
            return <GameCardLibrary lockAddress={item.lock} />;
          })}

          {/* const getGameByLock = useGetGameByLock({ lock });

              {getGameByLock.isLoading ? (
                <Spinner />
              ) : (
                <GameCardLibrary
                  gameTitle="Awesome Game Title"
                  developerWalletAddress="0xA008D4c1E22A760FF47218659A0ddD934Aa543FD"
                  imgUrl=""
                  lockAddress={lock}
                />
              )} */}
        </>
      )}
    </section>
  );
}

LibraryGrid.propTypes = {};

LibraryGrid.defaultProps = {};

export default LibraryGrid;
