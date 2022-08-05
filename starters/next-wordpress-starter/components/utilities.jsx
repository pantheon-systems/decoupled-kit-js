export const get_url_path = (url) => {
  var rxPath = new RegExp("http[s]?:\\/\\/?[^\\/]+\\/(.*[/]{1}.*/.+.+$)");
  return rxPath.exec(url)[1];
};
