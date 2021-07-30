import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.module.css';

function BaseButtonLink({ children, href, ...rest }) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

function BaseButton(props) {
  return <button type="button" {...props} />;
}

function getBaseButton(href) {
  if (href) return BaseButtonLink;
  return BaseButton;
}

function Button({ href, children, className, ...rest }) {
  const Component = getBaseButton(href);

  const customClassName = classNames(className, style.button, 'button');
  return (
    <Component className={customClassName} href={href} {...rest}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  href: null,
  children: null,
  className: null,
};

export default Button;
