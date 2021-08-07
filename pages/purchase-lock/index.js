// import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';
import { useState } from 'react';
import { Page } from 'components/layouts';
import { toast } from 'react-toastify';

import LockPurchaseForm from 'containers/lock-purchase-form';

import styles from './style.module.css';

function PurchaseLock() {
  const { account } = useEthers();
  const [purchases, setPurchases] = useState([]);
  const handleSuccess = (data) => {
    toast.success('purchased');
    setPurchases([data, ...purchases]);
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['purchase-lock-wrapper']} wrapper`}>
        <h1>Purchase Lock</h1>
        {account ? <PurchaseLockForm onSuccess={handleSuccess} /> : null}
      </div>
      {purchases.length > 0 ? (
        <section className={styles['purchases-list']}>
          <h2>Purchases</h2>
          {purchases.map((item, i) => {
            return <span key={i}>purchase: {item.hash}</span>;
          })}
        </section>
      ) : null}
    </Page>
  );
}

PurchaseLock.propTypes = {};

export default PurchaseLock;
