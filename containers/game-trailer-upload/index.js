import PropTypes from 'prop-types';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import FileUploadForm from 'containers/file-upload-form';

function GameTrailerUpload({ id, onSuccess, onError }) {
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
      trailer: directUrl,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  return (
    <FileUploadForm
      label="Game Trailer"
      accept="video/mp4"
      onSuccess={handleSuccess}
    />
  );
}

GameTrailerUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameTrailerUpload.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameTrailerUpload;
