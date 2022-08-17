import { testLib } from '../lib/testLib';

describe('testLib()', () => {
  it('should return the value that was passed into it if the value is a string', () => {
    expect(testLib('test')).toEqual('test');
  });
  it('should throw an error if the value is not a string', () => {
    // @ts-ignore
    expect(() => testLib(1)).toThrowError(
      'Value should be a string, got number'
    );
  });
});
