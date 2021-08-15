import { useEthers } from '@usedapp/core';

import Spinner from 'components/spinner';
import DeveloperSignUpButton from 'containers/developer-sign-up-button';

import {
  useCreateDeveloperMutation,
  useInvalidateAllDevelopersQuery,
} from 'hooks/api/developers';

function DeveloperSignUp() {
  const { account } = useEthers();
  const invalidate = useInvalidateAllDevelopersQuery();
  const mutation = useCreateDeveloperMutation({
    config: {
      onSuccess: () => {
        invalidate();
      },
      onError: () => {},
    },
  });

  const handleSuccess = () => {
    mutation.mutate({ walletAddress: account, _id: '' });
  };

  return (
    <div>
      <h2>Sign up as a developer</h2>

      <span className="price-cell developer-price">
        <span className="game-price eth">
          <span className="price">0.01</span> per / month
        </span>
      </span>

      <ul className="checklist">
        <li>100% of revenue goes to the developer.</li>
        <li>Distribute your games worldwide</li>
        <li>Protect your games with GameVault DRM</li>
        <li>Utilise NFT games to create limited runs</li>
        <li>Get listed on the GameVault Store</li>
        <li>Submit games to the GameVault VIP program</li>
      </ul>
      {!account || !mutation.isLoading ? (
        <Spinner />
      ) : (
        <DeveloperSignUpButton onSuccess={handleSuccess} />
      )}
    </div>
  );
}

DeveloperSignUp.propTypes = {};

DeveloperSignUp.defaultProps = {};

export default DeveloperSignUp;
