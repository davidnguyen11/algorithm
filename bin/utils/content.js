function getPgkJSON(appName) {
  return {
    name: appName,
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
      test: 'node index'
    },
    keywords: [],
    author: '',
    license: 'ISC'
  };
}

function getJsBody(functionName, parameters) {
  return `var ${functionName} = function (${parameters}) {};`;
}

module.exports = {
  getPgkJSON,
  getJsBody,
};
