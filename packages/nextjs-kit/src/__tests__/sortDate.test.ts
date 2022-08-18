import { sortDate } from '../lib/sortDate';
const unsortedDates = [
  {
    date: '2021-06-17T15:12:39+00:00',
  },
  {
    date: '1996-06-17T15:12:39+00:00',
  },
  {
    date: '2001-06-17T15:12:39+00:00',
  },
  {
    date: '2020-06-17T15:12:39+00:00',
  },
];

const sortedAsc = [
  {
    date: '1996-06-17T15:12:39+00:00',
  },
  {
    date: '2001-06-17T15:12:39+00:00',
  },
  {
    date: '2020-06-17T15:12:39+00:00',
  },
  {
    date: '2021-06-17T15:12:39+00:00',
  },
];
const sortedDesc = [
  {
    date: '2021-06-17T15:12:39+00:00',
  },
  {
    date: '2020-06-17T15:12:39+00:00',
  },

  {
    date: '2001-06-17T15:12:39+00:00',
  },
  {
    date: '1996-06-17T15:12:39+00:00',
  },
];

describe('sortChar()', () => {
  it('should return the unsorted numbers in a sorted ascending order', () => {
    expect(sortDate(unsortedDates, 'date', 'ascending')).toEqual(sortedAsc);
  });
  it('should return the unsorted numbers in a sorted descending order', () => {
    expect(sortDate(unsortedDates, 'date', 'descending')).toEqual(sortedDesc);
  });
});
