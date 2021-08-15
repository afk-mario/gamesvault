import PropTypes from 'prop-types';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import FileUploadForm from 'containers/file-upload-form';

function GameCoverUpload({ id, onSuccess, onError }) {
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

  const handleSuccess = (cid, files) => {
    const [file] = files;
    const baseUrl = `https://${cid}.ipfs.dweb.link`;
    const directUrl = `${baseUrl}/${file?.name}`;
    const entry = {
      ...query.data,
      coverImage: directUrl,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  return (
    <>
      <FileUploadForm label="Game cover" onSuccess={handleSuccess} />

      {query && query.data && query.data.coverImage ? (
        <div className="edit-game-uploaded-item">
          <img src={query.data.coverImage} alt="" />
        </div>
      ) : null}
    </>
  );
}

GameCoverUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameCoverUpload.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameCoverUpload;
