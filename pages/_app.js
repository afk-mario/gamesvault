/* eslint filenames/match-exported: 0 */

import { DAppProvider } from '@usedapp/core';

import 'styles/variables.css';
import 'styles/globals.css';

const config = {};

function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default App;
