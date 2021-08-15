import { useEthers } from '@usedapp/core';

import DeveloperView from 'views/developer-view';

function Developer() {
  const { account } = useEthers();
  if (!account) return null;
  return <DeveloperView />;
}

Developer.propTypes = {};

export default Developer;
