import PropTypes from 'prop-types';

import { useGetThreadInfoQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function DbInfo({ threadId }) {
  const { data, isLoading } = useGetThreadInfoQuery({ threadId });

  if (isLoading) return <Spinner />;

  return (
    <section className={styles['db-info-wrapper']}>
      <header className={styles['db-info-header']}>
        <h3 className={styles['db-info-title']}>
          Key <br />
          {data.key}
        </h3>
      </header>
      <h3>Addrs</h3>
      <article className={styles['db-info-addrs']}>
        {data.addrs.map((addr) => {
          return <span key={addr}>{addr}</span>;
        })}
      </article>
    </section>
  );
}

DbInfo.propTypes = {
  threadId: PropTypes.string.isRequired,
};

DbInfo.defaultProps = {};

export default DbInfo;
