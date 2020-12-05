// https://leetcode.com/problems/encode-and-decode-tinyurl/

// let id = 0;
let id = 18293;
const db = {};
const host = 'http://tinyurl.com';

var encode = function (longUrl) {
  // 62 chars
  const map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const mapLength = map.length; // 62

  id++;

  let n = id;
  const chars = [];

  while (n) {
    const c = map[n % mapLength];
    chars.unshift(c); // store in reversed order
    n = parseInt(n / mapLength, 10);
  }

  const pathName = chars.join('');
  const shortUrl = `${host}/${pathName}`;
  db[id] = {
    shortUrl,
    originalUrl: longUrl,
  };
  return shortUrl;
};

var decode = function (shortUrl) {
  const arr = shortUrl.split('/');
  const pathName = arr[arr.length - 1];
  let currentId = 0;

  for (let i = 0; i < pathName.length; i++) {
    const ascii = pathName[i].charCodeAt(0);
    // check char in range a-z (0-25)
    if (ascii >= 97 && ascii <= 122) {
      currentId = currentId * 62 + ascii - 'a'.charCodeAt(0);
    }

    // check char in range A-Z (26-51)
    if (ascii >= 65 && ascii <= 90) {
      currentId = currentId * 62 + ascii - 'A'.charCodeAt(0) + 26;
    }

    // check char in range 0-9 (52-61)
    if (ascii >= 48 && ascii <= 57) {
      currentId = currentId * 62 + ascii - '0'.charCodeAt(0) + 52;
    }
  }
  return db[currentId].originalUrl;
};

var longUrl = 'https://leetcode.com/problems/design-tinyurl';
var shortUrl = 'http://tinyurl.com/b';

var longUrl = 'https://www.example.net/arithmetic/attraction?back=air';
var shortUrl = 'http://tinyurl.com/eVe';

encode(longUrl);
console.log(db);
decode(shortUrl);
