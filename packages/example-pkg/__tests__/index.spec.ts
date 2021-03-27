import { sum } from '@src/index'

describe('Source Index', () => {
  it('Should be sum 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
