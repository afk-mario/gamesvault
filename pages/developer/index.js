// import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';
import { Page } from 'components/layouts';

import MetamaskNotConnected from 'containers/metamask-not-connected';
import DeveloperContent from 'containers/developer-content';

import styles from './style.module.css';

function Developer() {
  const { account } = useEthers();

  return (
    <Page className={styles.page}>
      <div className={`${styles['developer-wrapper']} wrapper`}>
        <h1>Developer</h1>
        <>{account ? <DeveloperContent /> : <MetamaskNotConnected />}</>
      </div>
    </Page>
  );
}

Developer.propTypes = {};

export default Developer;
