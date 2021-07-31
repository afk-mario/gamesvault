// import PropTypes from 'prop-types';
import { useState } from 'react';
import { Page } from 'components/layouts';
import { toast } from 'react-toastify';

import FileRow from 'containers/file-row';
import UploadFileForm from 'containers/upload-file-form';

import styles from './style.module.css';

function UploadFile() {
  const [files, setFiles] = useState([]);
  const handleSuccess = (data) => {
    toast.success('File uploaded');
    setFiles([data, ...files]);
  };

  return (
    <Page className={styles.page}>
      <div className={`${styles['upload-file-wrapper']} wrapper`}>
        <h1>UploadFile</h1>
        <UploadFileForm onSuccess={handleSuccess} />
        {files.length > 0 ? (
          <section className={styles['file-list']}>
            {files.map((cid) => {
              return <FileRow key={cid} cid={cid} />;
            })}
          </section>
        ) : null}
      </div>
    </Page>
  );
}

UploadFile.propTypes = {};

export default UploadFile;
