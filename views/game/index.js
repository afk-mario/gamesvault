import { useRouter } from 'next/router';
import { Page } from 'components/layouts';

import GameDetailsView from 'views/game-details-view';

function Game() {
  const router = useRouter();
  const { gameId } = router.query;

  return (
    <Page>
      <div className="container page-container main-container">
        <main className="main">Game</main>

        <GameDetailsView gameId={gameId} />
      </div>
    </Page>
  );
}

Game.propTypes = {};

export default Game;
