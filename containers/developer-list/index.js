// import PropTypes from 'prop-types';

import { useGetAllDevelopersQuery } from 'hooks/api/developers';

import Spinner from 'components/spinner';
import Empty from 'components/empty';

import DeveloperRow from './developer-row';

import styles from './style.module.css';

function DeveloperList() {
  const { data, isLoading } = useGetAllDevelopersQuery();

  if (isLoading) return <Spinner />;

  if (!data || data?.length === 0) {
    return <Empty message="No Developers" />;
  }
  return (
    <section className={styles['developer-list-wrapper']}>
      {data.map((item) => {
        const { _id: id } = item;
        return <DeveloperRow key={id} {...item} />;
      })}
    </section>
  );
}

DeveloperList.propTypes = {};

DeveloperList.defaultProps = {};

export default DeveloperList;
