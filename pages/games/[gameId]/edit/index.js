// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import GameEditForm from 'containers/game-edit-form';
import GameIconUpload from 'containers/game-icon-upload';
import GameIcon from 'containers/game-icon';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import styles from './style.module.css';

function Edit() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  const { gameId } = router.query;
  if (!identity || !client) return <LoginErrorPage />;

  const handleSuccess = (data) => {
    console.log(data);
    toast.success('Game updated');
  };

  const handleError = (data) => {
    console.log(data);
    toast.error('Something wrong happened');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['game-edit-wrapper']} .wrapper`}>
        <h1>Edit game: {gameId}</h1>
        <GameIcon id={gameId} />
        <GameIconUpload id={gameId} />
        <GameEditForm
          id={gameId}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </Page>
  );
}

Edit.propTypes = {};

export default Edit;
