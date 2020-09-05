import { generateUUID } from '../helper';

describe('generateUUID', () => {
  it('retrieve a string', () => {
    expect(typeof generateUUID()).toBe('string');
  });
});
