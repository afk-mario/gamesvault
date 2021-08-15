// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import GamePublishButton from 'containers/game-publish-button';
import GamePublishManuallyButton from 'containers/game-publish-manually-button';
import GameEditForm from 'containers/game-edit-form';
// import GameIconUpload from 'containers/game-icon-upload';
import GameBuildUpload from 'containers/game-build-upload';
import GameScreenshotsUpload from 'containers/game-screenshots-upload';
import GameCoverUpload from 'containers/game-cover-upload';
// import GameTrailerUpload from 'containers/game-trailer-upload';

import { Page } from 'components/layouts';
import Search from 'components/search';
import DeveloperLinks from 'containers/developer-links';

const areLocksWorking = true;

function Edit() {
  const router = useRouter();
  const { gameId } = router.query;

  const handleSuccess = () => {
    toast.success('Game updated');
  };

  const handleError = () => {
    toast.error('Something wrong happened');
  };

  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Edit game</h1>
        </div>
      </div>

      <div className="container page-container main-container">
        <section className="sidebar">
          <Search />
          <DeveloperLinks />
        </section>
        <main className="main">
          <div className="main-content edit-game-page">
            <div className="content-box">
              <ul className="breadcrumb">
                <li>
                  <a href="/developer">Developer</a>
                </li>
                <li>Edit Game</li>
              </ul>

              <p>Edit your game store assets and information below:</p>

              {areLocksWorking ? (
                <GamePublishButton id={gameId} className="corner-btn" />
              ) : (
                <GamePublishManuallyButton id={gameId} className="corner-btn" />
              )}
              <GameEditForm
                id={gameId}
                onSuccess={handleSuccess}
                onError={handleError}
              />

              {/* {isAdmin ? <GameReleaseDateUpdateButton id={gameId} /> : null} */}
              <GameScreenshotsUpload id={gameId} />
              {/* <GameTrailerUpload id={gameId} /> */}
              <GameBuildUpload id={gameId} />
              {/* <GameIconUpload id={gameId} /> */}
              <GameCoverUpload id={gameId} />
            </div>
          </div>
        </main>

        <section className="secondary-content">
          <div className="content-box">
            <>
              <h3>Questions?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora ea suscipit sequi sapiente ducimus dolorem officia
                optio? Consequuntur natus rem expedita. Laudantium blanditiis
                labore quo veniam commodi repudiandae esse officiis!
              </p>
            </>
          </div>
        </section>
      </div>
    </Page>
  );
}

Edit.propTypes = {};

export default Edit;
