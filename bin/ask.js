module.exports = function (readlineInterface, text) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(text, (input) => resolve(input));
  });
}
