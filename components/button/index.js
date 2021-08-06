import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function BaseButtonLink({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

BaseButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

function BaseButton(props) {
  return <button type="button" {...props} />;
}

function getBaseButton(href) {
  if (href) return BaseButtonLink;
  return BaseButton;
}

function Button({ href, children, className, loading, ...rest }) {
  const Component = getBaseButton(href);

  const customClassName = classNames(className, styles.button, 'button');
  return (
    <Component
      className={customClassName}
      href={href}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Loading</span>
        </>
      ) : (
        children
      )}
    </Component>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  href: null,
  children: null,
  className: null,
  loading: false,
};

export default Button;
