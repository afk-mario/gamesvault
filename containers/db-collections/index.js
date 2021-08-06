import PropTypes from 'prop-types';

import { useListCollectionsQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function DbCollections({ threadId }) {
  const { data, isLoading } = useListCollectionsQuery({ threadId });

  if (isLoading) return <Spinner />;

  console.log('collections', data);

  if (data.length === 0) return null;

  return (
    <section className={styles['db-collections-wrapper']}>
      {data.map((item, i) => {
        return (
          <div key={i} className={styles['db-collections-item']}>
            <span>{item.name}</span>
            <span>schema: {item.schema}</span>
          </div>
        );
      })}
    </section>
  );
}

DbCollections.propTypes = {
  threadId: PropTypes.string.isRequired,
};

DbCollections.defaultProps = {};

export default DbCollections;
