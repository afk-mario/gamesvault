// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

import CollectionInfo from 'containers/collection-info';

import { Page } from 'components/layouts';
import LoginErrorPage from 'components/login-error-page';

import styles from './style.module.css';

function CollectionDetails() {
  const router = useRouter();
  const { id, name } = router.query;
  const { identity } = useAuth();
  const { client } = useDb();

  if (!identity) return <LoginErrorPage />;

  return (
    <Page className={styles.page}>
      <div className={`${styles['collection-details-wrapper']} wrapper`}>
        <h2>Collection {name}</h2>
        {client ? <CollectionInfo threadId={id} name={name} /> : null}
      </div>
    </Page>
  );
}

CollectionDetails.propTypes = {};

export default CollectionDetails;
