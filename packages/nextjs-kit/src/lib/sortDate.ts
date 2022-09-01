import { DataToSort } from '../types';

/**
 * Sorts any date field of an object on a specific key in a direction of the users choice.
 *
 * @param sortObj.data - The data sort
 * @param sortObj.key - Key to sort object by
 * @param sortObj.direction - Direction to sort the data
 * @returns An array of data sorted by the given key and direction
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
