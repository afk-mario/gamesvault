// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';

import LibraryGrid from 'containers/library-grid';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

function Library() {
  const { identity } = useAuth();
  const { client } = useDb();
  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Library</h1>
        </div>
      </div>
      <div className="container page-container main-container">
        <main className="main">
          {identity && client ? <LibraryGrid /> : null}
        </main>
      </div>
    </Page>
  );
}

Library.propTypes = {};

export default Library;
