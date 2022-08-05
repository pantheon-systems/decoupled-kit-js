export const getUrlPath = (url) => {
  var rxPath = new RegExp("http[s]?:\\/\\/?[^\\/]+\\/(.*[/]{1}.*/.+.+$)");
  return "/" + rxPath.exec(url)[1];
};
