/**
 *
 * @param {Array<Record<string, string | number>>} obj object to sort
 * @param {string} key to sort object by
 * @param {string} direction to sort object by
 * @returns {Array<Record<string, string | number>>} the sorted object that was passed in
 * @remarks
 * This is a function to sort any date filed of an object on a specific key in a direction of the users choice.
 *
 * Note:
 * There is a named and default export so that we can
 * support submodules for the ESModule build and a single entrypoint for the UMD build
 */
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
