import { Observable, Observer } from '@implementations/index'

jest.mock('../../src/implementations/Observable', () => Observable)

const ObservableMock = Observable as jest.Mock<Observable>

function factoryObserver() {
  const instance = new Observer()
  const observerIdentifier = instance.identifier

  return {
    instance,
    observerIdentifier
  }
}
describe('Observer', () => {
  it('Should be able to generate a unique hash for each instance of Observer', () => {
    const { observerIdentifier } = factoryObserver()
    const { observerIdentifier: observerIdentifier2 } = factoryObserver()

    expect(observerIdentifier.hashId.length).toEqual(24)
    expect(typeof observerIdentifier.symbolId).toBe('symbol')
    expect(observerIdentifier.hashId).not.toEqual(observerIdentifier2.hashId)
    expect(observerIdentifier.symbolId).not.toEqual(
      observerIdentifier2.symbolId
    )
  })

  it('Should be able to notify observer for make the tasks implemented on method', () => {
    const observer = new Observer()
    const observable = new ObservableMock()

    observer.notify(observable)

    expect(observer.identifier.hashId).toEqual(
      observable.observerIdentifier.hashId
    )
  })
})
