import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import GameDeleteButton from 'containers/game-delete-button';
import Button from 'components/button';

function GameRow({ _id: id, title, tagline, coverImage }) {
  return (
    <>
      <div className="grid-item grid-image">
        {coverImage && (
          <img
            src={coverImage}
            alt={`${{ title }}cover`}
            className="game-cover"
          />
        )}
      </div>
      <div className="grid-item">{title}</div>
      <div className="grid-item">
        <span className="developer-games-tagline">{tagline}</span>
      </div>
      <div className="grid-item">
        <GameDeleteButton
          id={id}
          className="btn-small"
          onSuccess={() => {
            toast.success('Deleted game');
          }}
        />
      </div>
      <div className="grid-item">
        <Button className="btn-small" href={`/admin/games/${id}/edit`}>
          Edit
        </Button>
      </div>
    </>
  );
}

GameRow.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
  tagline: PropTypes.string,
};

GameRow.defaultProps = {
  coverImage: '',
  tagline: '',
};

export default GameRow;
