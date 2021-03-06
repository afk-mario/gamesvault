import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';
import DeveloperForm from 'components/developer-form';

import {
  useCreateDeveloperMutation,
  useInvalidateAllDevelopersQuery,
} from 'hooks/api/developers';

function DeveloperCreateForm({ onSuccess, onError }) {
  const { account } = useEthers();
  const invalidate = useInvalidateAllDevelopersQuery();
  const mutation = useCreateDeveloperMutation({
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
      walletAddress: account,
      description: values.description,
      _id: '',
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };
  return <DeveloperForm onSubmit={onSubmit} isLoading={mutation.isLoading} />;
}

DeveloperCreateForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DeveloperCreateForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default DeveloperCreateForm;
