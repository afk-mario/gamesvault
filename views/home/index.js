// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';

import style from './style.module.css';

function Home() {
  return (
    <Page className={style.page}>
      <div className="wrapper">
        <h1>Home</h1>
      </div>
    </Page>
  );
}

Home.propTypes = {};

export default Home;
