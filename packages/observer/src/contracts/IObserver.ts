import { IObservable, ObserverIdentifier } from '@contracts/index'

export interface IObserver {
  notify(observable: IObservable): void
  identifier: ObserverIdentifier
}
