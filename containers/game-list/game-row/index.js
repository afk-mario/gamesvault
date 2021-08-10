import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './style.module.css';

function GameRow({ _id: id, title, tagline, description }) {
  return (
    <div className={styles['game-row']}>
      <Link href={`/games/${id}/edit`}>
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