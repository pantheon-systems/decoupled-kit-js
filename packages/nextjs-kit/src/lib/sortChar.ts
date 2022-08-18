export const sortChar = (
  obj: Array<Record<string, string | number>>,
  key: string,
  direction: string
) => {
  if (direction === 'ascending') {
    obj.sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));
  }

  if (direction === 'descending') {
    obj.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));
  }

  return obj;
};

export default sortChar;
