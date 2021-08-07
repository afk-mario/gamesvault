// import PropTypes from 'prop-types';

import { Page } from 'components/layouts';
import Button from 'components/button';
import { useAuth } from 'context/auth';

import styles from './style.module.css';

function Login() {
  const { identity, login, logout } = useAuth();
  return (
    <Page className={styles.page}>
      <div className="wrapper">
        <h1>Login</h1>
        <p>This would acctually be the connect as a developer thing</p>
        {identity ? (
          <Button onClick={logout}>Logout</Button>
        ) : (
          <Button onClick={login}>Login</Button>
        )}
      </div>
    </Page>
  );
}

Login.propTypes = {};

export default Login;
