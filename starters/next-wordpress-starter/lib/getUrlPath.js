export const getUrlPath = (url) => {
  const rxPath = new RegExp("http[s]?:\\/\\/?[^\\/]+\\/(.*[/]{1}.*/.+.+$)");
  return "/" + rxPath.exec(url)[1];
};
