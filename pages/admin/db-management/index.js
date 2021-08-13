// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import DbCreateForm from 'containers/db-create-form';
import DbList from 'containers/db-list';

import LoginErrorPage from 'components/login-error-page';
import { Page } from 'components/layouts';
import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import styles from './style.module.css';

function DbManagement() {
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
        <DbCreateForm onSuccess={handleSuccess} />
        {client ? (
          <>
            <h2>User Databases</h2>
            <DbList />
          </>
        ) : null}
      </div>
    </Page>
  );
}

DbManagement.propTypes = {};

export default DbManagement;
