// import PropTypes from 'prop-types';

import { useGetAllGamesQuery } from 'hooks/api/games';

import Spinner from 'components/spinner';
import Empty from 'components/empty';

import GameRow from './game-row';

import styles from './style.module.css';

function GameList() {
  const { data, isLoading } = useGetAllGamesQuery();

  if (isLoading) return <Spinner />;

  if (!data || data?.length === 0) {
    return <Empty message="No Games" />;
  }
  return (
    <section className={styles['game-list-wrapper']}>
      {data.map((item) => {
        const { _id: id } = item;
        return <GameRow key={id} {...item} />;
      })}
    </section>
  );
}

GameList.propTypes = {};

GameList.defaultProps = {};

export default GameList;
