export const sortAlphabetical = (articles, dir) => {
  let sortable = [];
  for (const prop in articles) {
    //   console.log(articles[prop].field_media_image.name);
    sortable.push([articles[prop].field_media_image.name, prop]);
  }
  sortable.sort();

  if (dir === "desc") {
    sortable.reverse();
  }

  let sortedArticles = {};
  for (var i = 0; i < sortable.length; i++) {
    sortedArticles[i] = articles[sortable[i][1]];
  }
  return sortedArticles;
};
