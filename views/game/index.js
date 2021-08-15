import { useAuth } from 'context/auth';
import { useDb } from 'context/db';
import { useRouter } from 'next/router';
import { Page } from 'components/layouts';

import LoginErrorPage from 'components/login-error-page';
import GameDetailsView from 'views/game-details-view';

function Game() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  const { gameId } = router.query;
  if (!identity || !client) return <LoginErrorPage />;

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
