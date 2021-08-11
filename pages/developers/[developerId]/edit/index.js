// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import DeveloperEditForm from 'containers/developer-edit-form';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import styles from './style.module.css';

function Edit() {
  const router = useRouter();
  const { identity } = useAuth();
  const { client } = useDb();
  const { developerId } = router.query;
  if (!identity || !client) return <LoginErrorPage />;

  const handleSuccess = (data) => {
    console.log(data);
    toast.success('Developer updated');
  };

  const handleError = (data) => {
    console.log(data);
    toast.error('Something wrong happened');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['developer-edit-wrapper']} .wrapper`}>
        <h1>Edit developer: {developerId}</h1>
        <DeveloperEditForm
          id={developerId}
          onSuccess={handleSuccess}
          handleError={handleError}
        />
      </div>
    </Page>
  );
}

Edit.propTypes = {};

export default Edit;
