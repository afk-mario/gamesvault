// import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import styles from './style.module.css';

function Edit() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  const { gameId } = router.query;
  if (!identity || !client) return <LoginErrorPage />;

  // const handleSuccess = (data) => {
  //   console.log(data);
  //   toast.success('Game updated');
  // };

  // const handleError = (data) => {
  //   console.log(data);
  //   toast.error('Something wrong happened');
  // };

  return (
    <Page className={styles.page}>
      <div className={`${styles['game-edit-wrapper']} .wrapper`}>
        <h1>Edit game: {gameId}</h1>
        <h2>TO DO</h2>
        <p>
          I was thinking that the flow would be that you first create the game
          with the basic data (plain text properties)
        </p>
        <p>
          And then we allow the user to edit the game where all fields that
          require a file upload are in different containers than the main game
          form
        </p>

        <p>
          So then for example we edit the game pullfrog and there is widget for
          "Upload icon", the user drops there a file and we start uploading it
          with web3, once we get the URL from web3 we update the database entry
        </p>
      </div>
    </Page>
  );
}

Edit.propTypes = {};

export default Edit;
