/* eslint filenames/match-regex: 0 */
module.exports = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
