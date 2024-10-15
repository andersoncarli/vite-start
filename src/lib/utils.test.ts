import { capitalize } from './utils';

describe('utils', () => {
  describe('capitalize', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('returns an empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });
  });
});