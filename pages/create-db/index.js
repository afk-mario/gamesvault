// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import CreateDbForm from 'containers/create-db-form';
import UserThreads from 'containers/user-threads';

import LoginErrorPage from 'components/login-error-page';
import { Page } from 'components/layouts';
import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import styles from './style.module.css';

function CreateDb() {
  const { identity } = useAuth();
  const { client } = useDb();

  const handleSuccess = () => {
    toast.success('created Db ');
  };

  if (!identity) return <LoginErrorPage />;
  return (
    <Page className={styles.page}>
      <div className={`${styles['create-db-wrapper']} wrapper`}>
        <h1>Create DB</h1>
        <CreateDbForm onSuccess={handleSuccess} />
        {client ? (
          <>
            <h2>User Threads</h2>
            <UserThreads />{' '}
          </>
        ) : null}
      </div>
    </Page>
  );
}

CreateDb.propTypes = {};

export default CreateDb;
