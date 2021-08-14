import PropTypes from 'prop-types';
import { CgSoftwareUpload } from 'react-icons/cg';
import { useForm, FormProvider } from 'react-hook-form';

import { usePutFileMutation } from 'hooks/api/storage';

import Button from 'components/button';
import FileInput from 'components/file-input';

import styles from './style.module.css';

function FileUploadForm({ accept, label, onSuccess, onError, multiple }) {
  const methods = useForm();
  const { watch, handleSubmit, reset } = methods;
  const mutation = usePutFileMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data, watch('file'));
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
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null}
        <label htmlFor="file">{label}</label>
        <FileInput accept={accept} name="file" multiple={multiple} />
        <Button
          className={styles.submit}
          type="submit"
          loading={mutation.isLoading}
        >
          {!mutation.isLoading ? <CgSoftwareUpload /> : null}
          <span>Upload</span>
        </Button>
      </form>
    </FormProvider>
  );
}

FileUploadForm.propTypes = {
  label: PropTypes.string,
  accept: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  multiple: PropTypes.bool,
};

FileUploadForm.defaultProps = {
  accept: 'image/png, image/jpg, image/jpeg, image/gif',
  label: 'file',
  onSuccess: () => {},
  onError: () => {},
  multiple: false,
};

export default FileUploadForm;
