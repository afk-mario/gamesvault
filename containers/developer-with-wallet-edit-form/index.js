import PropTypes from 'prop-types';

import DeveloperForm from 'components/developer-form';
import Spinner from 'components/spinner';

import {
  useGetDeveloperByWalletAddress,
  useSaveDeveloperMutation,
  useInvalidateAllDevelopersQuery,
} from 'hooks/api/developers';

function DeveloperWithWalletEditForm({ walletAddress, onSuccess, onError }) {
  const query = useGetDeveloperByWalletAddress({ walletAddress });
  const invalidate = useInvalidateAllDevelopersQuery();
  const mutation = useSaveDeveloperMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        invalidate();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  if (query.isLoading) return <Spinner />;

  const [developer] = query.data;
  const onSubmit = (values) => {
    const entry = {
      ...developer,
      name: values.name,
      description: values.description,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  const { description, name } = developer;
  const defaultValues = {
    description,
    name,
  };

  return (
    <DeveloperForm
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
      defaultValues={defaultValues}
    />
  );
}

DeveloperWithWalletEditForm.propTypes = {
  walletAddress: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DeveloperWithWalletEditForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default DeveloperWithWalletEditForm;
