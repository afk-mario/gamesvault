/* eslint filenames/match-exported: 0 */
/* eslint react/prop-types: 0 */

import { DAppProvider } from '@usedapp/core';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from 'context/auth';
import { DbProvider } from 'context/db';
import { StorageProvider } from 'context/storage';
import { UnlockProvider } from 'context/unlock';

import { QueryClient, QueryClientProvider } from 'react-query';

import 'react-toastify/dist/ReactToastify.css';
import '@reach/dialog/styles.css';

import 'styles/variables.css';
import 'styles/globals.css';

const config = {};
const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DAppProvider config={config}>
        <AuthProvider>
          <DbProvider>
            <UnlockProvider>
              <StorageProvider>
                <Component {...pageProps} />
                <ToastContainer />
                <ReactQueryDevtools
                  initialIsOpen={false}
                  position="bottom-right"
                />
              </StorageProvider>
            </UnlockProvider>
          </DbProvider>
        </AuthProvider>
      </DAppProvider>
    </QueryClientProvider>
  );
}

export default App;
