import PropTypes from 'prop-types';
import Link from 'next/link';

import DeveloperDeleteButton from 'containers/developer-delete-button';

import styles from './style.module.css';

function DeveloperRow({ _id: id, name, description, walletAddress }) {
  return (
    <div className={styles['developer-row']}>
      <Link href={`/admin/developers/${id}/edit`}>
        <a className={styles['developer-row-info']}>
          <span>
            <strong>Wallet:</strong> {walletAddress}
          </span>
          <span>
            <strong>Name:</strong> {name}
          </span>
          <span>
            <strong>ID:</strong> {id}
          </span>
          <span>
            <strong>Description:</strong> {description}
          </span>
        </a>
      </Link>
      <DeveloperDeleteButton id={id} />
    </div>
  );
}

DeveloperRow.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  walletAddress: PropTypes.string,
};

DeveloperRow.defaultProps = {
  description: PropTypes.string,
  walletAddress: PropTypes.string,
};

export default DeveloperRow;
