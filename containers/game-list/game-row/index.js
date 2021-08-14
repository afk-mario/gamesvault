import PropTypes from 'prop-types';
import Link from 'next/link';
import { toast } from 'react-toastify';

import GameDeleteButton from 'containers/game-delete-button';

import styles from './style.module.css';

function GameRow({ _id: id, title, tagline, description }) {
  return (
    <div className={styles['game-row']}>
      <Link href={`/admin/games/${id}/edit`}>
        <a className={styles['game-row-info']}>
          <span>
            <strong>title:</strong> {title}
          </span>
          <span>
            <strong>tagline:</strong> {tagline}
          </span>
          <span>
            <strong>ID:</strong> {id}
          </span>
          <span>
            <strong>Description:</strong> {description}
          </span>
        </a>
      </Link>
      <GameDeleteButton
        id={id}
        onSuccess={() => {
          toast.success('Deleted game');
        }}
      />
    </div>
  );
}

GameRow.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tagline: PropTypes.string,
};

GameRow.defaultProps = {
  description: '',
  tagline: '',
};

export default GameRow;
