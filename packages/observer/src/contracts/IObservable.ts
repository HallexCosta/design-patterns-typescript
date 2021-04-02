import { IObserver, ObserverIdentifier } from '@contracts'
import { Observer } from '@implementations'

export interface IObservable {
  observerIdentifier: ObserverIdentifier
  observers: Map<symbol, Observer>
  subscribe(observer: IObserver): void
  unsubscribe(observer: ObserverIdentifier): void
  publish(): void
}
