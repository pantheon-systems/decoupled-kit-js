import { sortChar } from '../lib/sortChar';
const unsortedNum = [
  {
    num: 100,
  },
  {
    num: 200,
  },
  {
    num: 30,
  },
];
const sortedAsc = [
  {
    num: 30,
  },
  {
    num: 100,
  },
  {
    num: 200,
  },
];
const sortedDesc = [
  {
    num: 200,
  },
  {
    num: 100,
  },
  {
    num: 30,
  },
];

const unsortedChar = [
  {
    char: 'MMM',
  },
  {
    char: 'AAA',
  },
  {
    char: 'CCC',
  },
];
const ascChar = [
  {
    char: 'AAA',
  },
  {
    char: 'CCC',
  },
  {
    char: 'MMM',
  },
];
const descChar = [
  {
    char: 'MMM',
  },
  {
    char: 'CCC',
  },
  {
    char: 'AAA',
  },
];
describe('sortChar()', () => {
  it('should return the unsorted numbers in a sorted ascending order', () => {
    expect(sortChar(unsortedNum, 'num', 'ascending')).toEqual(sortedAsc);
  });
  it('should return the unsorted numbers in a sorted descending order', () => {
    expect(sortChar(unsortedNum, 'num', 'descending')).toEqual(sortedDesc);
  });
  it('should return the unsorted characters in an alphabetical ascending order', () => {
    expect(sortChar(unsortedChar, 'char', 'ascending')).toEqual(ascChar);
  });
  it('should return the unsorted numbers in an alphabetical descending order', () => {
    expect(sortChar(unsortedChar, 'char', 'descending')).toEqual(descChar);
  });
});
