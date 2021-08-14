import PropTypes from 'prop-types';

import { useGetCollectionInfoQuery } from 'hooks/api/db';

import Empty from 'components/empty';
import Spinner from 'components/spinner';

import styles from './style.module.css';

function CollectionInfo({ threadId, name }) {
  const { data, isLoading } = useGetCollectionInfoQuery({ threadId, name });

  if (isLoading) return <Spinner />;
  if (!data) return <Empty message="Not found" />;

  return (
    <section className={styles['collection-info-wrapper']}>
      <pre>{JSON.stringify(data.schema, null, 2)}</pre>
    </section>
  );
}

CollectionInfo.propTypes = {
  threadId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

CollectionInfo.defaultProps = {};

export default CollectionInfo;
