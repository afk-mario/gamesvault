import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useGetFileQuery } from 'hooks/api/storage';

import Spinner from 'components/spinner';
import FileList from 'components/file-list';

import FileStatus from 'containers/file-status';

import styles from './style.module.css';

function FileRow({ className, cid }) {
  const file = useGetFileQuery({ cid });

  const customClassName = classnames('file-row', styles['file-row'], className);
  const baseUrl = `https://${cid}.ipfs.dweb.link`;

  return (
    <details className={customClassName}>
      <summary className={styles['file-row-summary']}>
        <header className={styles['file-row-header']}>
          <h3 className={styles['file-row-title']}>
            <a rel="noopener noreferrer" target="_blank" href={baseUrl}>
              {cid}
            </a>
          </h3>
        </header>
      </summary>
      {file.isLoading ? <Spinner /> : null}
      {file.data ? <FileList files={file.data} baseUrl={baseUrl} /> : null}
      <FileStatus cid={cid} />
    </details>
  );
}

FileRow.propTypes = {
  className: PropTypes.string,
  cid: PropTypes.string.isRequired,
};

FileRow.defaultProps = {
  className: null,
};

export default FileRow;
