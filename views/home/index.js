// import PropTypes from 'prop-types';
import Link from 'next/link';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function Home() {
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
        <h1>Actual Pages</h1>
        <h2>
          <Link href="/developer">
            <a>Developer</a>
          </Link>
        </h2>
      </div>
    </Page>
  );
}

Home.propTypes = {};

export default Home;
