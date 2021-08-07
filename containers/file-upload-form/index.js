import PropTypes from 'prop-types';
import { CgSoftwareUpload } from 'react-icons/cg';
import { useForm } from 'react-hook-form';

import { usePutFileMutation } from 'hooks/api/storage';

import Button from 'components/button';

import styles from './style.module.css';

function FileUploadForm({ onSuccess, onError }) {
  const { register, handleSubmit, reset } = useForm();
  const mutation = usePutFileMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        reset();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const onSubmit = (values) => {
    mutation.mutate(values.file);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}
      <label htmlFor="file">File</label>
      <input type="file" multiple {...register('file')} />
      <Button
        className={styles.submit}
        type="submit"
        loading={mutation.isLoading}
      >
        {!mutation.isLoading ? <CgSoftwareUpload /> : null}
        <span>Upload</span>
      </Button>
    </form>
  );
}

FileUploadForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

FileUploadForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default FileUploadForm;
