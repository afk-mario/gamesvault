// import PropTypes from 'prop-types';
import Link from 'next/link';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function Admin() {
  return (
    <Page className={styles.page}>
      <div className="wrapper">
        <h1>Test Pages</h1>
        <h2>
          <Link href="/upload-file">
            <a>Upload File</a>
          </Link>
        </h2>
        <h2>
          <Link href="/purchase-lock">
            <a>Purchase Lock</a>
          </Link>
        </h2>
        <h2>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </h2>
        <h2>
          <Link href="/db-management">
            <a>Db Management</a>
          </Link>
        </h2>
        <h2>
          <Link href="/developers">
            <a>Developers</a>
          </Link>
        </h2>
        <h2>
          <Link href="/games">
            <a>Games</a>
          </Link>
        </h2>
      </div>
    </Page>
  );
}

Admin.propTypes = {};

export default Admin;
