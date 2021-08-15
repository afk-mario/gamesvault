import { toast } from 'react-toastify';
import { useEthers } from '@usedapp/core';

import DeveloperWithWalletEditForm from 'containers/developer-with-wallet-edit-form';

import styles from './style.module.css';

function DeveloperContentSignedIn() {
  const { account } = useEthers();

  const handleSuccess = () => {
    toast.success('Developer updated');
  };

  const handleError = () => {
    toast.error('Something wrong happened');
  };

  return (
    <article className={styles['lock-info-wrapper']}>
      <header>
        <h1>Welcome back developer!</h1>
        <DeveloperWithWalletEditForm
          walletAddress={account}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </header>
    </article>
  );
}

DeveloperContentSignedIn.propTypes = {};

DeveloperContentSignedIn.defaultProps = {};

export default DeveloperContentSignedIn;
