// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';

import LibraryGrid from 'containers/library-grid';

function Library() {
  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Library</h1>
        </div>
      </div>
      <div className="container page-container main-container">
        <main className="main">
          <LibraryGrid />
        </main>
      </div>
    </Page>
  );
}

Library.propTypes = {};

export default Library;
