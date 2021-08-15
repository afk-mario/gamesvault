import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';
import { cloneElement, Children } from 'react';

const NavLink = ({
  children,
  activeClassName,
  activeSubClassName,
  ...rest
}) => {
  const { href, as } = rest;
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  // remove URL parameters
  const sanitizedPath = asPath.split('#')[0].split('?')[0];

  const isActive = sanitizedPath === href || sanitizedPath === as;
  const isSubActive =
    !isActive &&
    (sanitizedPath.startsWith(`${href}/`) ||
      sanitizedPath.startsWith(`${as}/`));

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className = classnames(childClassName, {
    [activeClassName]: isActive,
    [activeSubClassName]: isSubActive,
  });

  return (
    <Link {...rest}>
      {cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

NavLink.propTypes = {
  children: PropTypes.node,
  activeClassName: PropTypes.string,
  activeSubClassName: PropTypes.string,
};

NavLink.defaultProps = {
  children: null,
  activeClassName: 'active',
  activeSubClassName: 'active-sub',
};

export default NavLink;
