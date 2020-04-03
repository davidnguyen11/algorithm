function toCamelCase(appName) {
  const name = appName.toLowerCase();
  const arr = name.split('-');

  if (arr.length === 0) return name;

  let str = arr[0];
  for (let i = 1; i < arr.length; i++) {
    str += arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }

  return str;
}

module.exports = toCamelCase;
