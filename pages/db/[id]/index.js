/* eslint filenames/match-exported: 0 */
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import DbInfo from 'containers/db-info';
import CollectionCreateForm from 'containers/collection-create-form';
import CollectionList from 'containers/collection-list';

import styles from './style.module.css';

function DbDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { identity } = useAuth();
  const { client } = useDb();

  if (!identity) return <LoginErrorPage />;

  const handleSuccess = () => {
    toast.success('created Collection');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['db-details-wrapper']} wrapper`}>
        <h2>Create Collection by Name</h2>
        {client ? (
          <CollectionCreateForm threadId={id} onSuccess={handleSuccess} />
        ) : null}
        {client ? (
          <>
            <h3>Collections</h3>
            <CollectionList threadId={id} />{' '}
          </>
        ) : null}
        {client ? <DbInfo threadId={id} /> : null}
      </div>
    </Page>
  );
}

DbDetails.propTypes = {};

export default DbDetails;