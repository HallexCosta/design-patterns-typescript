import { IObserver, ObserverIdentifier } from '@contracts/index'
import { Observer } from '@implementations/index'

export interface IObservable {
  observerIdentifier: ObserverIdentifier
  observers: Map<symbol, Observer>
  subscribe(observer: IObserver): void
  unsubscribe(observer: ObserverIdentifier): void
  publish(): void
}
