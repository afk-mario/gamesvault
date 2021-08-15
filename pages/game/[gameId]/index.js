/* eslint filenames/match-exported: 0 */
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import GameDetailsView from 'views/game-details-view';

function GameDetailsPage() {
  const router = useRouter();
  const { gameId } = router.query;

  return <GameDetailsView id={gameId} />;
}

GameDetailsPage.propTypes = {};

export default GameDetailsPage;
