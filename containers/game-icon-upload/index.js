import PropTypes from 'prop-types';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import FileUploadForm from 'containers/file-upload-form';

function GameIconUpload({ id, onSuccess, onError }) {
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

  const handleSuccess = (cid, file) => {
    const baseUrl = `https://${cid}.ipfs.dweb.link`;
    const directUrl = `${baseUrl}/${file?.name}`;
    const entry = {
      ...query.data,
      icon: directUrl,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  return (
    <div>
      <h1>Update icon</h1>
      <FileUploadForm onSuccess={handleSuccess} />
    </div>
  );
}

GameIconUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameIconUpload.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameIconUpload;
