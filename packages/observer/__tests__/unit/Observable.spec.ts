import { Observable, Observer } from '@implementations'

jest.mock('@implementations/Observer', () => Observer)

const ObserverMock = Observer as jest.Mock<Observer>

function subscribeManyObservers(observable: Observable, amount: number): void {
  for (let i = 1; i <= amount; i++) observable.subscribe(new ObserverMock())
}

describe('Observable', () => {
  it('Should be able to subscribe in observers storages (use unique hash to identify Observer)', () => {
    const observable = new Observable()
    const observerMock = new ObserverMock()

    observable.subscribe(observerMock)

    const symbolId = observerMock.identifier.symbolId

    expect(observable.observers.has(symbolId)).toBeTruthy()
    expect(observable.observers.size).toEqual(1)
  })

  it('Should be able to unsubscribe observer by unique hash (that generate for each instance of observer)', () => {
    const observable = new Observable()
    const observerMock = new ObserverMock()

    observable.subscribe(observerMock)
    observable.unsubscribe(observerMock.identifier)

    expect(observable.observers.size).toEqual(0)
  })

  it('Should be able to show the message if Observable tries to communicate the observer and there is no observer registered', () => {
    const observable = new Observable()
    const expectedToThrow = () => {
      observable.publish()
    }

    expect(expectedToThrow).not.toThrow()
    expect(observable.observers.size).toEqual(0)
  })

  it('Should be able to communicate all observer (with method publish)', () => {
    const observable = new Observable()
    subscribeManyObservers(observable, 10)

    const expectedToThrow = () => {
      observable.publish()
    }

    expect(expectedToThrow).not.toThrow()
    expect(observable.observers.size).toEqual(10)
  })
})
