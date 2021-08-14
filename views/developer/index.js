import { Page } from 'components/layouts';
import StoreNavigation from 'components/store-navigation';

function Developer() {
  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Developer</h1>
        </div>
        <StoreNavigation />
      </div>
      <div className="container page-container main-container">
        <main className="main">
          <div className="main-content grid">Test</div>
        </main>
      </div>
    </Page>
  );
}

Developer.propTypes = {};

export default Developer;
