import { sum } from '../src/lib/sum';

describe('sample', () => {
  it('passes a basic assertion', () => {
    expect(sum(1, 1)).toBe(2);
  });
});
