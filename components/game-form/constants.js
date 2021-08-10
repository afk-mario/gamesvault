export const emptyDefaultValues = {
  title: '',
  tagline: '',
  description: '',
  tags: [],
  releaseDate: '',
  lockAddress: '',
};

export const prefilledDefaultValues = {
  title: 'Pullfrog',
  tagline: 'Is awesome',
  description: 'Is awesome because',
  tags: 'pico-8,frog',
  releaseDate: new Date().toISOString().substr(0, 10),
  lockAddress: 'random lock address',
};
