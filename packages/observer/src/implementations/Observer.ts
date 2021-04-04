import { IObservable, IObserver, ObserverIdentifier } from '@contracts'

const kCreateObserverIdentifier = Symbol('kCreateObserverIdentifier')
const kCreateSymbolObjectId = Symbol('kCreateSymbolObjectId')
const kGenerateHashId = Symbol('kGenerateHashId')

export class Observer implements IObserver {
  private readonly observerIdentifier: ObserverIdentifier

  public constructor() {
    const generateHashId = this[kGenerateHashId].bind(this)
    const createSymbolObjectId = this[kCreateSymbolObjectId].bind(this)
    const createObserverIdentifier = this[kCreateObserverIdentifier].bind(this)

    const hashId = generateHashId()
    const symbolId = createSymbolObjectId(hashId)
    const observerIdentifier = createObserverIdentifier(hashId, symbolId)

    this.observerIdentifier = observerIdentifier
  }

  public notify(observable: IObservable): void {
    console.log('Observer: Change `observerHashId` of Observable')
    observable.observerIdentifier = this.observerIdentifier

    console.log(
      `Observer: Notifying observer ${this.observerIdentifier.hashId}`,
      observable
    )
  }

  public get identifier(): ObserverIdentifier {
    console.log('Observer: Calling identifier...')
    console.log('Observer: Containing identifier', this.observerIdentifier)

    return this.observerIdentifier
  }

  private [kCreateObserverIdentifier](
    hashId: string,
    symbolId: symbol
  ): ObserverIdentifier {
    console.log('Observer: Create Observer Identifier')

    return {
      symbolId,
      hashId
    }
  }

  private [kCreateSymbolObjectId](hashId: string): symbol {
    console.log('Observer: Generate Symbol Hash Id')

    return Symbol(hashId)
  }

  private [kGenerateHashId](): string {
    console.log('Observer: Generate Hash Id')

    const date = new Date()
    const timestamp = ((date.getTime() / 1000) | 0).toString(16)
    const context = `${timestamp}xxxxxxxxxxxxxxxx`
    const hash = context
      .replace(/[x]/g, () => ((Math.random() * 16) | 0).toString(16))
      .toLowerCase()

    return hash
  }
}
