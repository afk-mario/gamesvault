// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import DeveloperCreateForm from 'containers/developer-create-form';
import DeveloperList from 'containers/developer-list';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function Developers() {
  const handleSuccess = () => {
    toast.success('Developer created');
  };

  const handleError = () => {
    toast.error('Something wrong happened');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['developers-wrapper']} .wrapper`}>
        <h1>Developers</h1>
        <DeveloperCreateForm
          onSuccess={handleSuccess}
          handleError={handleError}
        />
        <DeveloperList />
      </div>
    </Page>
  );
}

Developers.propTypes = {};

export default Developers;
