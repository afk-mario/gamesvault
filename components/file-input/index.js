import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

function FileInput({ name, accept, multiple }) {
  const { register, unregister, setValue, watch } = useFormContext();
  const files = watch(name);
  const onDrop = useCallback(
    (droppedFiles, rejectedFiles = []) => {
      rejectedFiles.forEach((item) => {
        toast.error(item.errors[0].code);
      });
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: multiple ? 0 : 1,
  });

  useEffect(() => {
    register(name);
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <>
      <div
        {...getRootProps()}
        type="file"
        role="button"
        aria-label="File Upload"
        id={name}
      >
        <input name={name} {...getInputProps()} multiple={multiple} />
        <div style={{ width: '500px', border: 'black solid 2px' }}>
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag the files here ...</p>
          )}
          {!!files?.length && (
            <div className=" ">
              {files.map((file) => {
                const { type } = file;
                const isImage = type.includes('image');
                if (isImage) {
                  return (
                    <div key={file.name}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        style={{ width: '100%', display: 'block' }}
                      />
                    </div>
                  );
                }
                return (
                  <div key={file.name}>
                    <span>{file.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

FileInput.defaultProps = {
  multiple: false,
};

export default FileInput;
