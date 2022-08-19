import { DataToSort, ASC, DESC } from '../types';

/**
 *
 * @param {Array<Record<string, string | number>>} obj object to sort
 * @param {string} key to sort object by
 * @param {string} direction to sort object by
 * @returns {Array<Record<string, string | number>>} the sorted object that was passed in
 * @remarks
 * This is a function to sort any character object on a specific key in a direction of the users choice.
 *
 * Note:
 * There is a named and default export so that we can
 * support submodules for the ESModule build and a single entrypoint for the UMD build
 */

export const sortChar = (sortObj: DataToSort) => {
  if (Object.values(ASC).includes(sortObj.direction as ASC)) {
    sortObj.data.sort((a, b) =>
      a[sortObj.key] < b[sortObj.key]
        ? -1
        : a[sortObj.key] > b[sortObj.key]
        ? 1
        : 0
    );
  }

  if (Object.values(DESC).includes(sortObj.direction as DESC)) {
    sortObj.data.sort((a, b) =>
      a[sortObj.key] > b[sortObj.key]
        ? -1
        : a[sortObj.key] < b[sortObj.key]
        ? 1
        : 0
    );
  }

  return sortObj.data;
};

export default sortChar;
