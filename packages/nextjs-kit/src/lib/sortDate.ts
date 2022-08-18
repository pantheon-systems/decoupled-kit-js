export const sortDate = (
  obj: Array<Record<string, string>>,
  key: string,
  direction: string
) => {
  if (direction === 'ascending') {
    obj.sort((a, b) => {
      const dateA = new Date(a[key]);
      const dateB = new Date(b[key]);
      if (dateA.getTime() < dateB.getTime()) {
        return -1;
      }
      if (dateA.getTime() > dateB.getTime()) {
        return 1;
      }
      return 0;
    });
  } else if (direction === 'descending') {
    obj.sort((a, b) => {
      const dateA = new Date(a[key]);
      const dateB = new Date(b[key]);
      if (dateA.getTime() > dateB.getTime()) {
        return -1;
      }
      if (dateA.getTime() < dateB.getTime()) {
        return 1;
      }
      return 0;
    });
  }
  return obj;
};

export default sortDate;
