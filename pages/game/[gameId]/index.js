/* eslint filenames/match-exported: 0 */
// import PropTypes from 'prop-types';
import { useAuth } from 'context/auth';
import { useDb } from 'context/db';
import { useRouter } from 'next/router';

import LoginErrorPage from 'components/login-error-page';
import GameDetailsView from 'views/game-details-view';

function GameDetailsPage() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  const { gameId } = router.query;
  if (!identity || !client) return <LoginErrorPage />;

  return <GameDetailsView id={gameId} />;
}

GameDetailsPage.propTypes = {};

export default GameDetailsPage;
