import PropTypes from 'prop-types';
import Link from 'next/link';
import DbDeleteButton from 'containers/db-delete-button';
import { toast } from 'react-toastify';

import styles from './style.module.css';

function DbRow({ id, name }) {
  const onSuccess = () => {
    toast.success('Deleted Database');
  };

  const onError = () => {
    toast.error('Something went wrong please try again later');
  };

  return (
    <div className={styles['db-row']}>
      <Link href={`/db-management/${id}`}>
        <a className={styles['db-row-info']}>
          <span>
            <strong>Name:</strong> {name}
          </span>
          <span>
            <strong>ID:</strong> {id}
          </span>
        </a>
      </Link>
      <DbDeleteButton threadId={id} onSuccess={onSuccess} onError={onError} />
    </div>
  );
}

DbRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DbRow;
