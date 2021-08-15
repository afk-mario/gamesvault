import PropTypes from 'prop-types';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import GameScreenshots from 'containers/game-screenshots';

import FileUploadForm from 'containers/file-upload-form';

function GameScreenshotsUpload({ id, onSuccess, onError }) {
  const query = useGetGameById({ id });
  const invalidate = useInvalidateAllGamesQuery();
  const mutation = useSaveGameMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        invalidate();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const handleSuccess = (cid) => {
    const entry = {
      ...query.data,
      screenshots: cid,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  return (
    <>
      <FileUploadForm label="Screenshots" onSuccess={handleSuccess} multiple />
      {query && query.data && query.data.screenshots ? (
        <GameScreenshots screenshots={query.data.screenshots} />
      ) : null}
    </>
  );
}

GameScreenshotsUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameScreenshotsUpload.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameScreenshotsUpload;
