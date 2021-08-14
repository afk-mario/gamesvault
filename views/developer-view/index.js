// import PropTypes from 'prop-types';

import { useGetHasValidKeyQuery } from 'hooks/api/unlock';
import { UNLOCK_DEVELOPER_LOCK_ADDRESS } from 'constants/locks';

import { Page } from 'components/layouts';
import Spinner from 'components/spinner';
import Search from 'components/search';

import DeveloperSignUp from 'containers/developer-sign-up';
import DeveloperContentSignedIn from 'containers/developer-content-signed-in';
import DeveloperLinks from 'containers/developer-links';

function DeveloperView() {
  const { data, isLoading } = useGetHasValidKeyQuery({
    lockAddress: UNLOCK_DEVELOPER_LOCK_ADDRESS,
  });

  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Developer</h1>
        </div>
      </div>
      <div className="container page-container main-container">
        <section className="sidebar">
          <Search />
          <DeveloperLinks />
        </section>
        <main className="main">
          <div className="main-content">
            <div className="content-box">
              {isLoading ? (
                <Spinner />
              ) : (
                <>{data ? <DeveloperContentSignedIn /> : <DeveloperSignUp />}</>
              )}
            </div>
          </div>
        </main>

        <section className="secondary-content">
          <div className="content-box">
            <h3>Questions?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              ea suscipit sequi sapiente ducimus dolorem officia optio?
              Consequuntur natus rem expedita. Laudantium blanditiis labore quo
              veniam commodi repudiandae esse officiis!
            </p>
          </div>
        </section>
      </div>
    </Page>
  );
}

DeveloperView.propTypes = {};

export default DeveloperView;
