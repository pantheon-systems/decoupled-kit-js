import { DataToSort } from '../types';

/**
 *
 * @param {DataToSort['data']} sortObj.data - The data sort
 * @param {DataToSort['key']} sortObj.key - Key to sort object by
 * @param  {DataToSort['direction']} sortObj.direction - Direction to sort the data
 * @returns {Record<string, string | number>[]} An array of data sorted by the given key and direction
 * @remarks
 * This is a function to sort any date filed of an object on a specific key in a direction of the users choice.
 *
 */
export const sortDate = (sortObj: DataToSort) => {
  const sortedDates = sortObj;
  sortedDates.data.sort((a, b) => {
    const direction = sortedDates.direction.toLowerCase();
    const left = direction === 'asc' ? b : a;
    const right = direction === 'asc' ? a : b;
    const leftDate = new Date(left[sortedDates.key]);
    const rightDate = new Date(right[sortedDates.key]);

    return leftDate.getTime() > rightDate.getTime()
      ? -1
      : leftDate.getTime() < rightDate.getTime()
      ? 1
      : 0;
  });
  return sortedDates.data;
};

export default sortDate;
