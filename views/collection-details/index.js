// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import CollectionInfo from 'containers/collection-info';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function CollectionDetails() {
  const router = useRouter();
  const { id, name } = router.query;

  return (
    <Page className={styles.page}>
      <div className={`${styles['collection-details-wrapper']} wrapper`}>
        <h2>Collection {name}</h2>
        <CollectionInfo threadId={id} name={name} />
      </div>
    </Page>
  );
}

CollectionDetails.propTypes = {};

export default CollectionDetails;
