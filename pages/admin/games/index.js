// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import GameCreateForm from 'containers/game-create-form';
import GamesList from 'containers/game-list';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function Games() {
  const router = useRouter();

  const handleSuccess = (data) => {
    router.push(`/admin/games/${data[0]}/edit`);
  };

  const handleError = () => {
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
