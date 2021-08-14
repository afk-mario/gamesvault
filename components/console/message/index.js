import PropTypes from 'prop-types';
import classnames from 'classnames';

import { formatDate } from 'utils/date';

import styles from './style.module.css';

function Message({ className, message, type, date }) {
  const customClassName = classnames(
    className,
    styles.message,
    'message',
    styles[`-${type}`]
  );

  return (
    <article className={customClassName}>
      <time>
        {formatDate(date, {
          hour: 'numeric',
          minute: 'numeric',
          seconds: 'numeric',
        })}
      </time>
      <span>{message}</span>
    </article>
  );
}

Message.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['log', 'success']).isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

Message.defaultProps = {
  className: null,
};

export default Message;
