import PropTypes from 'prop-types';

import { useListCollectionsQuery } from 'hooks/api/db';

import Empty from 'components/empty';
import Spinner from 'components/spinner';

import CollectionRow from './collection-row';

import styles from './style.module.css';

function CollectionList({ threadId }) {
  const { data, isLoading } = useListCollectionsQuery({ threadId });

  if (isLoading) return <Spinner />;

  if (data == null || data?.length === 0) {
    return <Empty message="No collections" />;
  }

  return (
    <section className={styles['collection-list-wrapper']}>
      {data.map((item, i) => {
        return <CollectionRow {...item} key={i} threadId={threadId} />;
      })}
    </section>
  );
}

CollectionList.propTypes = {
  threadId: PropTypes.string.isRequired,
};

CollectionList.defaultProps = {};

export default CollectionList;
