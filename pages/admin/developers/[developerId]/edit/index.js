// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import DeveloperEditForm from 'containers/developer-edit-form';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function Edit() {
  const router = useRouter();
  const { developerId } = router.query;

  const handleSuccess = () => {
    toast.success('Developer updated');
  };

  const handleError = () => {
    toast.error('Something wrong happened');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['developer-edit-wrapper']} .wrapper`}>
        <h1>Edit developer: {developerId}</h1>
        <DeveloperEditForm
          id={developerId}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
    </Page>
  );
}

Edit.propTypes = {};

export default Edit;
