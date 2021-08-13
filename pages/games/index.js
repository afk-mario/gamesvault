// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import GameCreateForm from 'containers/game-create-form';
import GamesList from 'containers/game-list';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import styles from './style.module.css';

function Games() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  if (!identity || !client) return <LoginErrorPage />;

  const handleSuccess = (data) => {
    router.push(`/games/${data[0]}/edit`);
  };

  const handleError = (data) => {
    console.log(data);
    toast.error('Something wrong happened');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['games-wrapper']} .wrapper`}>
        <h1>Games</h1>
        <GameCreateForm onSuccess={handleSuccess} handleError={handleError} />
        <GamesList />
      </div>
    </Page>
  );
}

Games.propTypes = {};

export default Games;
