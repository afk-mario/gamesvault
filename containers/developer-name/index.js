import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useGetDeveloperByWalletAddress } from 'hooks/api/developers';

function DeveloperName({ walletAddress }) {
  const query = useGetDeveloperByWalletAddress({
    walletAddress,
  });

  if (query.isLoading) {
    return <Spinner />;
  }

  const [developer] = query.data;

  if (!developer) return 'Not found';
  return developer.name;
}

DeveloperName.propTypes = {
  walletAddress: PropTypes.string.isRequired,
};

DeveloperName.defaultProps = {};

export default DeveloperName;
