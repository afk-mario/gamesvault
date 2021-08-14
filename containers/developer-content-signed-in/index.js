import { toast } from 'react-toastify';
import { useAuth } from 'context/auth';
import { useDb } from 'context/db';
import { useEthers } from '@usedapp/core';

import LoginErrorPage from 'components/login-error-page';
import DeveloperWithWalletEditForm from 'containers/developer-with-wallet-edit-form';

import styles from './style.module.css';

function DeveloperContentSignedIn() {
  const { account } = useEthers();
  const { identity } = useAuth();
  const { client } = useDb();
  if (!identity || !client) return <LoginErrorPage />;

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
