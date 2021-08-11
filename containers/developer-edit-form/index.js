import PropTypes from 'prop-types';

import DeveloperForm from 'components/developer-form';
import Spinner from 'components/spinner';

import {
  useGetDeveloperById,
  useSaveDeveloperMutation,
  useInvalidateAllDevelopersQuery,
} from 'hooks/api/developers';

function DeveloperEditForm({ id, onSuccess, onError }) {
  const query = useGetDeveloperById({ id });
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

  const onSubmit = (values) => {
    const entry = {
      name: values.name,
      walletAddress: values.walletAddress,
      description: values.description,
      _id: id,
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };

  if (query.isLoading) return <Spinner />;

  const {
    data: { description, name, walletAddress },
  } = query;
  const defaultValues = {
    description,
    name,
    walletAddress,
  };

  return (
    <DeveloperForm
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
      defaultValues={defaultValues}
    />
  );
}

DeveloperEditForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DeveloperEditForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default DeveloperEditForm;
