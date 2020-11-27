// https://leetcode.com/problems/web-crawler/
var crawl = function (startUrl, htmlParser) {
  var host = getHost(startUrl);

  function helper(startUrl, ans) {
    var urls = htmlParser.getUrls(startUrl);
    var urlHost;
    var url;
    for (var i = 0; i < urls.length; i++) {
      url = urls[i];
      urlHost = getHost(url);
      if (ans.has(url) || urlHost !== host) continue;

      ans.add(url);
      helper(url, ans);
    }
  }

  var ans = new Set([startUrl]);
  helper(startUrl, ans);

  return Array.from(ans);
};

function getHost(url) {
  // var temp = url.split('//');
  // temp = temp[1];
  // temp = temp.split('/');
  // return temp[0];
  return url.split('//')[1].split('/')[0];
}
