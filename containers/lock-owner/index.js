import PropTypes from 'prop-types';
import { useGetHasValidKeyQuery } from 'hooks/api/unlock';
import Spinner from 'components/spinner';

function LockOwner({ lockAddress }) {
  const { data, isLoading } = useGetHasValidKeyQuery({ lockAddress });

  if (isLoading) return <Spinner />;

  const { hasValidKey } = data;

  return (
    <article>
      <header>
        <h1>Has valid key?</h1>
      </header>

      <div>
        {hasValidKey ? (
          <span>You own this lock</span>
        ) : (
          <span>You do not own this lock</span>
        )}
      </div>
    </article>
  );
}

LockOwner.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

LockOwner.defaultProps = {};

export default LockOwner;
