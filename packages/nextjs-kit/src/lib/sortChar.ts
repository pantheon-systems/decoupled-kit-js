import { DataToSort } from '../types';

/**
 *
 * @param {DataToSort['data']} sortObj.data - The data sort
 * @param {DataToSort['key']} sortObj.key - Key to sort object by
 * @param  {DataToSort['direction']} sortObj.direction - Direction to sort the data
 * @returns {Record<string, string | number>[]} An array of data sorted by the given key and direction
 * @remarks
 * This is a function to sort any character object on a specific key in a direction of the users choice.
 *
 */

export const sortChar = (sortObj: DataToSort) => {
  const sortedArticles = sortObj;
  sortedArticles.data.sort((a, b) => {
    const direction = sortedArticles.direction.toLowerCase();
    const left = direction === 'asc' ? b : a;
    const right = direction === 'asc' ? a : b;
    return left[sortedArticles.key] > right[sortedArticles.key]
      ? -1
      : left[sortedArticles.key] < right[sortedArticles.key]
      ? 1
      : 0;
  });
  return sortedArticles.data;
};

export default sortChar;
