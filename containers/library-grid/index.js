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
          {ownedLocks.map((item) => (
            <GameCardLibrary lockAddress={item.lock} key={item.lock} />
          ))}
        </>
      )}
    </section>
  );
}

LibraryGrid.propTypes = {};

LibraryGrid.defaultProps = {};

export default LibraryGrid;
