// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';
import { toast } from 'react-toastify';

import PurchaseLockForm from 'containers/purchase-lock-form';

import styles from './style.module.css';

function PurchaseLock() {
  const handleSuccess = (data) => {
    toast.success('purchased');
    console.log(data);
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['purchase-lock-wrapper']} wrapper`}>
        <h1>Purchase Lock</h1>
        <PurchaseLockForm onSuccess={handleSuccess} />
      </div>
    </Page>
  );
}

PurchaseLock.propTypes = {};

export default PurchaseLock;
