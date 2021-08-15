// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Page } from 'components/layouts';

import DbInfo from 'containers/db-info';
import CollectionList from 'containers/collection-list';

import CreateDevelopersCollectionButton from './create-developers-collection-button';
import CreateGamesCollectionButton from './create-games-collection-button';

import styles from './style.module.css';

function DbDetails() {
  const router = useRouter();
  const { id } = router.query;

  const handleSuccess = () => {
    toast.success('created Collection');
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['db-details-wrapper']} wrapper`}>
        <h2>Create Collection by Name</h2>
        <div className={styles['db-details-actions']}>
          <CreateDevelopersCollectionButton
            threadId={id}
            onSuccess={handleSuccess}
          />
          <CreateGamesCollectionButton
            threadId={id}
            onSuccess={handleSuccess}
          />
        </div>
        <>
          <h3>Collections</h3>
          <CollectionList threadId={id} />{' '}
        </>
        <DbInfo threadId={id} />
      </div>
    </Page>
  );
}

DbDetails.propTypes = {};

export default DbDetails;
