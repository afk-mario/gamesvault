// import PropTypes from 'prop-types';
import { useGetHasValidKeyQuery } from 'hooks/api/unlock';
import Spinner from 'components/spinner';

import DeveloperSignUp from 'containers/developer-sign-up';
import DeveloperContentSignedIn from 'containers/developer-content-signed-in';

import { UNLOCK_DEVELOPER_LOCK_ADDRESS } from 'constants/locks';

function DeveloperContent() {
  const { data, isLoading } = useGetHasValidKeyQuery({
    lockAddress: UNLOCK_DEVELOPER_LOCK_ADDRESS,
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>{data ? <DeveloperContentSignedIn /> : <DeveloperSignUp />}</>
      )}
    </>
  );
}

DeveloperContent.propTypes = {};

DeveloperContent.defaultProps = {};

export default DeveloperContent;
