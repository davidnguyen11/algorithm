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

function getComment(problemLink) {
  return problemLink ? `// ${problemLink}` : '';
}

function getJsBody(functionName, parameters, problemLink) {
  return `${getComment(problemLink)}\nvar ${functionName} = function (${parameters}) {};`;
}

module.exports = {
  getPgkJSON,
  getJsBody,
};
