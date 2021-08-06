import PropTypes from 'prop-types';

import { useListCollectionsQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function CollectionList({ threadId }) {
  const { data, isLoading } = useListCollectionsQuery({ threadId });

  if (isLoading) return <Spinner />;

  console.log('collections', data);

  if (data.length === 0) return null;

  return (
    <section className={styles['collection-list-wrapper']}>
      {data.map((item, i) => {
        return (
          <div key={i} className={styles['collection-list-item']}>
            <span>{item.name}</span>
            <span>schema: {item.schema}</span>
          </div>
        );
      })}
    </section>
  );
}

CollectionList.propTypes = {
  threadId: PropTypes.string.isRequired,
};

CollectionList.defaultProps = {};

export default CollectionList;
