import { IObservable, ObserverIdentifier } from '@contracts'

export interface IObserver {
  notify(observable: IObservable): void
  identifier: ObserverIdentifier
}
