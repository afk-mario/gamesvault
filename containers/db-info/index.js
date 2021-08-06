import PropTypes from 'prop-types';

import { useGetThreadInfoQuery } from 'hooks/api/db';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function DbInfo({ threadId }) {
  const { data, isLoading } = useGetThreadInfoQuery({ threadId });

  if (isLoading) return <Spinner />;

  return (
    <section className={styles['db-info-wrapper']}>
      <header>
        <h3>
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
