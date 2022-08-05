export const getUrlPath = (url) => {
  var rxPath = new RegExp("http[s]?:\\/\\/?[^\\/]+\\/(.*[/]{1}.*/.+.+$)");
  let ret_path = "";
  try {
    ret_path = rxPath.exec(url)[1];
    if (ret_path == null) {
      throw "Unable to get the image path from url";
    }
  } catch (e) {
    console.log(e);
    return null;
  }
  return "/" + ret_path;
};
