// import PropTypes from 'prop-types';

import { useListThreadsQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';
import Empty from 'components/empty';

import DbRow from './db-row';

import styles from './style.module.css';

function DbList() {
  const { data, isLoading } = useListThreadsQuery();

  if (isLoading) return <Spinner />;

  if (data.length === 0) {
    return <Empty message="No databases" />;
  }
  return (
    <section className={styles['db-list-wrapper']}>
      {data.map((item) => {
        return <DbRow {...item} key={item.id} />;
      })}
    </section>
  );
}

DbList.propTypes = {};

DbList.defaultProps = {};

export default DbList;
