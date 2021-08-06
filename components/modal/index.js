import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CgCloseO } from 'react-icons/cg';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import Button from 'components/button';

import styles from './style.module.css';

const Modal = ({
  title,
  children,
  className,
  isOpen,
  onDismiss,
  icon,
  ...rest
}) => {
  const customClassName = classNames(
    'modal-container',
    styles['modal-container'],
    className
  );

  return (
    <DialogOverlay
      className={styles['modal-backdrop']}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContent className={customClassName} {...rest}>
        {title ? (
          <header className={styles['modal-header']}>
            <div className={styles['modal-header-title']}>
              <h2>{title}</h2>
            </div>
            <div className={styles['modal-closing-button']}>
              <Button onClick={onDismiss}>
                <CgCloseO />
              </Button>
            </div>
          </header>
        ) : null}
        <section className={styles['modal-content']}>{children}</section>
      </DialogContent>
    </DialogOverlay>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onDismiss: PropTypes.func.isRequired,
  icon: PropTypes.func,
};

Modal.defaultProps = {
  className: null,
  title: null,
  status: 'info',
  isOpen: false,
  icon: null,
};

export default Modal;
