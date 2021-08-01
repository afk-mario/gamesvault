import PropTypes from 'prop-types';
import classnames from 'classnames';

import { parseAndFormatDate } from 'utils/date';
import { useFileStatusQuery } from 'hooks/api/storage';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function FileStatus({ className, cid }) {
  const customClassName = classnames(
    'file-status',
    styles['file-status'],
    className
  );
  const status = useFileStatusQuery({ cid });

  if (status.isLoading) return <Spinner />;

  const { deals, pins, created } = status.data;

  return (
    <details className={customClassName}>
      <summary className={styles['file-status-summary']}>
        <h3 className={styles['file-status-summary-title']}>
          <span>STATUS:</span>
          <time>{parseAndFormatDate(created)}</time>
        </h3>
      </summary>
      {deals.length > 0 ? (
        <div className={styles['deals-list']}>
          <header className={styles['deals-list-header']}>
            <h4 className={styles['deals-list-title']}>DEALS</h4>
          </header>
          {deals.map((deal, i) => {
            return <span key={`${deal.dealId}-${i}`}>{deal.dealId}</span>;
          })}
        </div>
      ) : null}
      {pins.length > 0 ? (
        <div className={styles['pins-list-wrapper']}>
          <header className={styles['pins-list-header']}>
            <h4 className={styles['pins-list-title']}>PINS</h4>
          </header>
          <div className={styles['pins-list']}>
            {pins.map((pin) => {
              return (
                <div key={pin.peerId} className={styles['pins-list-item']}>
                  <span>id: {pin.peerId}</span>
                  <span>name: {pin.peerName}</span>
                  {pin.region ? <span>region: {pin.region}</span> : null}
                  <span>status: {pin.status}</span>
                  <span>updated: {pin.updated}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </details>
  );
}

FileStatus.propTypes = {
  className: PropTypes.string,
  cid: PropTypes.string.isRequired,
};

FileStatus.defaultProps = {
  className: null,
};

export default FileStatus;
