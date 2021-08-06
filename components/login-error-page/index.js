import Link from 'next/link';

import { Page } from 'components/layouts';

import styles from './style.module.css';

function LoginErrorPage() {
  return (
    <Page className={styles.page}>
      <div className="wrapper">
        <h1>Private page</h1>
        <p>
          You need to
          <Link href="/login">
            <a>CreateDb</a>
          </Link>
        </p>
      </div>
    </Page>
  );
}
export default LoginErrorPage;
