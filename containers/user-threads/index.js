// import PropTypes from 'prop-types';
import Link from 'next/link';

import { useListThreadsQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function UserThreads() {
  const { data, isLoading } = useListThreadsQuery();

  if (isLoading) return <Spinner />;

  return (
    <section className={styles['user-threads-wrapper']}>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles['user-threads-item']}>
            <span>
              id:{' '}
              <Link href={`/db/${item.id}`}>
                <a>{item.id}</a>
              </Link>
            </span>
            <span>name: {item.name}</span>
          </div>
        );
      })}
    </section>
  );
}

UserThreads.propTypes = {};

UserThreads.defaultProps = {};

export default UserThreads;
