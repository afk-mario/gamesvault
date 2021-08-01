// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';
import { useEthers } from '@usedapp/core';
import MetamaskConnectButton from 'containers/metamask-connect-button';
import UnlockCreateLockButton from 'containers/unlock-create-lock-button';

function CreateLock() {
  const { account } = useEthers();

  return (
    <Page>
      <div className="wrapper">
        <h1>Create Lock</h1>

        {account ? (
          <div>
            <UnlockCreateLockButton lockAddress="0xD0d33b9531dbD071B3baDDabe9fb289A60AC8cB8" />
          </div>
        ) : (
          <MetamaskConnectButton />
        )}
      </div>
    </Page>
  );
}

CreateLock.propTypes = {};

export default CreateLock;
