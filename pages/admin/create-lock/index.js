// import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Page } from 'components/layouts';

import LockCreateForm from 'containers/lock-create-form';

import styles from './style.module.css';

function CreateLock() {
  const { account } = useEthers();
  const [purchases, setPurchases] = useState([]);
  const handleSuccess = (data) => {
    toast.success('purchased');
    setPurchases([data, ...purchases]);
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['purchase-lock-wrapper']} wrapper`}>
        <h1>Create Lock</h1>
        {account ? <LockCreateForm onSuccess={handleSuccess} /> : null}
      </div>
    </Page>
  );
}

CreateLock.propTypes = {};

export default CreateLock;
