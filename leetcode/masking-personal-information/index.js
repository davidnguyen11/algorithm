// https://leetcode.com/problems/masking-personal-information
/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function (s) {
  s = s.toLowerCase();

  const type = s.includes('@') ? 'email' : 'phone';

  switch (type) {
    case 'email':
      const arr = s.split('@');
      const name = arr[0];
      const address = arr[1];
      const firstChar = name[0];
      const lastChar = name[name.length - 1];

      return `${firstChar}*****${lastChar}@${address}`;
    case 'phone':
      let numbers = 0;
      let last4Digits = '';

      for (let i = s.length - 1; i >= 0; i--) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
          numbers++;

          if (last4Digits.length < 4) {
            last4Digits = s[i] + last4Digits;
          }
        }
      }

      const countryCode = numbers - 10;

      if (countryCode === 0) {
        return `***-***-${last4Digits}`;
      }

      let asterisks = '';
      for (let i = 0; i < countryCode; i++) {
        asterisks += '*';
      }
      return `+${asterisks}-***-***-${last4Digits}`;
  }
};
