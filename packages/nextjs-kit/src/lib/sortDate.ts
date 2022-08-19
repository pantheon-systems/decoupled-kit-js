import { DataToSort, ASC, DESC } from '../types';

/**
 *
 * @param {Array<Record<string, string | number>>} obj object to sort
 * @param {string} key to sort object by
 * @param {string} direction to sort object by
 * @returns {Array<Record<string, string | number>>} the sorted object that was passed in
 * @remarks
 * This is a function to sort any date filed of an object on a specific key in a direction of the users choice.
 *
 */
export const sortDate = (sortObj: DataToSort) => {
  if (Object.values(ASC).includes(sortObj.direction as ASC)) {
    sortObj.data.sort((a, b) => {
      const dateA = new Date(a[sortObj.key]);
      const dateB = new Date(b[sortObj.key]);
      if (dateA.getTime() < dateB.getTime()) {
        return -1;
      }
      if (dateA.getTime() > dateB.getTime()) {
        return 1;
      }
      return 0;
    });
  } else if (Object.values(DESC).includes(sortObj.direction as DESC)) {
    sortObj.data.sort((a, b) => {
      const dateA = new Date(a[sortObj.key]);
      const dateB = new Date(b[sortObj.key]);
      if (dateA.getTime() > dateB.getTime()) {
        return -1;
      }
      if (dateA.getTime() < dateB.getTime()) {
        return 1;
      }
      return 0;
    });
  }
  return sortObj.data;
};

export default sortDate;
