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

describe('sortDate()', () => {
	it('should return the unsorted dates in a sorted ascending order', () => {
		expect(
			sortDate({ data: unsortedDates, key: 'date', direction: 'ASC' }),
		).toEqual(sortedAsc);
	});
	it('should return the unsorted dates in a sorted descending order', () => {
		expect(
			sortDate({ data: unsortedDates, key: 'date', direction: 'DESC' }),
		).toEqual(sortedDesc);
	});
});
