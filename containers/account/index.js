import { Jazzicon } from '@ukstv/jazzicon-react';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

function Account() {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const formattedEther =
    etherBalance && formatEther(etherBalance).substring(0, 6);

  // const seed = parseInt(account.slice(2, 10), 16);
  const seed = account;
  return (
    <div className="wallet">
      <div className="balance">{formattedEther} MATIC</div>
      <div className="account">
        <div style={{ width: '16px', height: '16px' }}>
          <Jazzicon address={seed} />
        </div>
        <div className="address">{account}</div>
      </div>
    </div>
  );
}

Account.propTypes = {};

Account.defaultProps = {};

export default Account;
