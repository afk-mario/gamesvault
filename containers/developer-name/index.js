import PropTypes from 'prop-types';

import { useGetDeveloperByWalletAddress } from 'hooks/api/developers';

function DeveloperName({ walletAddress }) {
  const query = useGetDeveloperByWalletAddress({
    walletAddress,
  });

  if (query.isLoading) {
    return null;
  }

  const [developer] = query.data;

  if (!developer) return 'Not found';

  const { name = 'Not name' } = developer;

  return name;
}

DeveloperName.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

DeveloperName.defaultProps = {};

export default DeveloperName;
