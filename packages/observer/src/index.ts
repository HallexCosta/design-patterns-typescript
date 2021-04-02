import { Observable, Observer } from '@implementations'

const observable = new Observable()

const observer = new Observer()
const observer2 = new Observer()

observable.subscribe(observer)
observable.subscribe(observer2)
observable.publish()

observable.unsubscribe(observer.identifier)
observable.publish()

observable.unsubscribe(observer.identifier)
observable.unsubscribe(observer2.identifier)
observable.publish()
