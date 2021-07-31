/* eslint filenames/match-exported: 0 */
/* eslint react/prop-types: 0 */

import { StorageProvider } from 'context/storage';
import { DAppProvider } from '@usedapp/core';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';

import 'styles/variables.css';
import 'styles/globals.css';

const config = {};
const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DAppProvider config={config}>
        <StorageProvider>
          <Component {...pageProps} />
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </StorageProvider>
      </DAppProvider>
    </QueryClientProvider>
  );
}

export default App;
