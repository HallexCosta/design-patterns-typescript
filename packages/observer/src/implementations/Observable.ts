import { IObservable, ObserverIdentifier } from '@contracts'
import { Observer } from '.'

const kObserverStore = Symbol('kObserverStore')
const kGetObserverStore = Symbol('kGetObserverStore')
const kAttachObserver = Symbol('kAttachObserver')
const kDetachObserver = Symbol('kDetachObserver')
const kNotifyObservers = Symbol('kNotifyObservers')

export class Observable implements IObservable {
  private readonly [kObserverStore]: Map<symbol, Observer> = new Map()
  public readonly observerIdentifier: ObserverIdentifier

  public get observers(): Map<symbol, Observer> {
    const getObserverStore = this[kGetObserverStore].bind(this)
    const observerStore = getObserverStore()
    return observerStore
  }

  public subscribe(observer: Observer): void {
    console.log('Observable: Calling subscribe observer')

    const attachObserver = this[kAttachObserver].bind(this, observer)
    attachObserver()

    console.log('Observable: Subscribing observer', observer.identifier.hashId)
  }

  public unsubscribe(identifier: ObserverIdentifier): void {
    console.log('Observable: Calling unsubscribe observer')

    const detachObserver = this[kDetachObserver].bind(this, identifier)
    detachObserver()

    console.log('Observable: Detached observer', identifier.hashId)
  }

  public publish(): void {
    console.log('Observable: Calling publish observers')

    const notifyObservers = this[kNotifyObservers].bind(this, this)
    notifyObservers()

    console.log('Observable: Observers published')
  }

  private [kAttachObserver](observer: Observer): void {
    console.log('Observable: Attaching observer...')
    const { symbolId } = observer.identifier

    this[kObserverStore].set(symbolId, observer)
  }

  private [kDetachObserver]({ symbolId }: ObserverIdentifier): void {
    console.log('Observable: Detaching observer...')

    this[kObserverStore].delete(symbolId)
  }

  private [kNotifyObservers](observable: Observable): void {
    const observerStore = this[kObserverStore]
    console.log(`Observable: Notifying ${observerStore.size} observers...`)

    if (!observerStore.size) {
      console.log('Observable: There is no subscribed observers')
      return
    }

    for (const [, observer] of observerStore) {
      observer.notify(observable)
    }
  }

  private [kGetObserverStore](): Map<symbol, Observer> {
    return this[kObserverStore]
  }
}
