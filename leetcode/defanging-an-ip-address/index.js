/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  address = address.split('.');
  return `${address[0]}[.]${address[1]}[.]${address[2]}[.]${address[3]}`;
};

var address = '1.1.1.1';
var address = '255.100.50.0';

console.log(defangIPaddr(address));
