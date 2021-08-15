import { Page } from 'components/layouts';
import { useGetHasValidKeyQuery } from 'hooks/api/unlock';
import { UNLOCK_DEVELOPER_LOCK_ADDRESS } from 'constants/locks';
import Spinner from 'components/spinner';
import DeveloperContentSignedIn from 'containers/developer-content-signed-in';
import DeveloperSignUp from 'containers/developer-sign-up';
import Search from 'components/search';
import DeveloperLinks from 'containers/developer-links';
import GamesList from 'containers/game-list';

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
                <>
                  {data ? (
                    <>
                      <GamesList />
                    </>
                  ) : (
                    <DeveloperSignUp />
                  )}
                </>
              )}
            </div>
          </div>
        </main>

        <section className="secondary-content">
          <div className="content-box">
            <>
              {data ? (
                <DeveloperContentSignedIn />
              ) : (
                <>
                  <h3>Questions?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempora ea suscipit sequi sapiente ducimus dolorem officia
                    optio? Consequuntur natus rem expedita. Laudantium
                    blanditiis labore quo veniam commodi repudiandae esse
                    officiis!
                  </p>
                </>
              )}
            </>
          </div>
        </section>
      </div>
    </Page>
  );
}

DeveloperView.propTypes = {};

export default DeveloperView;
