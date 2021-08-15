import PropTypes from 'prop-types';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import FileUploadForm from 'containers/file-upload-form';

function GameBuildUpload({ id, onSuccess, onError }) {
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
      build: directUrl,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  return (
    <>
      <FileUploadForm
        label="Build (zip)"
        onSuccess={handleSuccess}
        accept=".zip"
      />

      {query && query.data && query.data.build ? (
        <div className="edit-game-uploaded-item">
          <p>
            <a href={query.data.build}>
              {query.data.build.substring(
                query.data.build.lastIndexOf('/') + 1
              )}
            </a>
          </p>
        </div>
      ) : null}
    </>
  );
}

GameBuildUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameBuildUpload.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameBuildUpload;
