import { sum } from '@src/index'

describe('Integration', () => {
  it('Should be sum 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
