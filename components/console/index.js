import PropTypes from 'prop-types';
import classnames from 'classnames';

import Message from './message';

import styles from './style.module.css';

function Console({ className, messages }) {
  const customClassName = classnames(className, styles.console, 'console');
  return (
    <section className={customClassName}>
      <header>
        <h3>Console</h3>
      </header>
      {messages.length > 0 ? (
        <ul className={styles['console-messages']}>
          {messages.map((message, i) => {
            return <Message {...message} key={i} />;
          })}
        </ul>
      ) : null}
    </section>
  );
}

Console.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['log', 'success']),
      message: PropTypes.string,
      date: PropTypes.instanceOf(Date),
    })
  ),
};

Console.defaultProps = {
  className: null,
  messages: [],
};

export default Console;
