import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.module.css';

function isFileImage(file) {
  const { name } = file;
  const fileExt = name.split('.').pop();
  return fileExt === 'jpg' || fileExt === 'png' || fileExt === 'svg';
}

function FileList({ files, baseUrl, className }) {
  const customClassName = classnames(
    'file-list',
    styles['file-list'],
    className
  );
  return (
    <div classnames={customClassName}>
      {files.map((file) => {
        const isImage = isFileImage(file);
        const directUrl = `${baseUrl}/${file.name}`;
        return (
          <article
            key={`${file.cid}-${file.name}`}
            className={styles['file-list-item']}
          >
            {isImage ? (
              <img
                src={directUrl}
                alt={file.name}
                className={styles['file-list-item-image']}
              />
            ) : null}
            <div className={styles['file-list-item-info']}>
              <a rel="noopener noreferrer" target="_blank" href={directUrl}>
                {file.name}
              </a>
              <span>size: {file.size}</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

FileList.propTypes = {
  className: PropTypes.string,
  baseUrl: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      cid: PropTypes.string,
      size: PropTypes.number,
    })
  ),
};

FileList.defaultProps = {
  className: null,
  files: [],
};

export default FileList;
