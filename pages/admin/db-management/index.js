// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import DbCreateForm from 'containers/db-create-form';
import DbList from 'containers/db-list';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function DbManagement() {
  const handleSuccess = () => {
    toast.success('created Db ');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['create-db-wrapper']} wrapper`}>
        <h1>Create DB</h1>
        <DbCreateForm onSuccess={handleSuccess} />
        <h2>User Databases</h2>
        <DbList />
      </div>
    </Page>
  );
}

DbManagement.propTypes = {};

export default DbManagement;
