<div>
  <h1 align="center">Observer</h1>
  
  <a href="https://github.com/HallexCosta/design-patterns-typescript/actions/workflows/ci.yml">
    <img src="https://github.com/HallexCosta/design-patterns-typescript/actions/workflows/ci.yml/badge.svg?branch=observer" alt="CI/CD">
  </a>
</div>

## Guide

- [Install](#install)
- [Build](#build) (Opcional)
- [Run](#run)
  - [Usage](#usage)
  - [Debug](#debug)
- [Contributors](#contributors)

[](#install)

```sh
# Cloning project
$ git clone git@github.com:HallexCosta/design-patterns-typescript.git

# Install dependencies
$ yarn
```

[](#build)

```sh
# Compile code to JS
$ yarn workspace @design-patterns-typescript/observer build
```

[](#run)

```sh
# Run TS code
$ yarn workspace @design-patterns-typescript/observer start:development
# ---------------------------
# Run compile JS code
$ yarn workspace @design-patterns-typescript/observer start:production
```

[](#usage)

## Usage

```typescript
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
```

[](#debug)

## Debug

```typescript
yarn workspace v1.22.5
yarn run v1.22.5
$ node dist/index.js
Observer: Generate Hash Id
Observer: Generate Symbol Hash Id
Observer: Create Observer Identifier
Observer: Generate Hash Id
Observer: Generate Symbol Hash Id
Observer: Create Observer Identifier
Observable: Calling subscribe observer
Observable: Attaching observer...
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06f9c49f1e1b62a732),
  hashId: '60666d06f9c49f1e1b62a732'
}
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06f9c49f1e1b62a732),
  hashId: '60666d06f9c49f1e1b62a732'
}
Observable: Subscribing observer 60666d06f9c49f1e1b62a732
Observable: Calling subscribe observer
Observable: Attaching observer...
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06e8c40fd6f6c21b0e),
  hashId: '60666d06e8c40fd6f6c21b0e'
}
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06e8c40fd6f6c21b0e),
  hashId: '60666d06e8c40fd6f6c21b0e'
}
Observable: Subscribing observer 60666d06e8c40fd6f6c21b0e
Observable: Calling publish observers
Observable: Notifying observers...
Observer: Change `observerHashId` of Observable
Observer: Notifying observer 60666d06f9c49f1e1b62a732 Observable {
  observerIdentifier: {
    symbolId: Symbol(60666d06f9c49f1e1b62a732),
    hashId: '60666d06f9c49f1e1b62a732'
  },
  [Symbol(kObserverStore)]: Map(2) {
    Symbol(60666d06f9c49f1e1b62a732) => Observer { observerIdentifier: [Object] },
    Symbol(60666d06e8c40fd6f6c21b0e) => Observer { observerIdentifier: [Object] }
  }
}
Observer: Change `observerHashId` of Observable
Observer: Notifying observer 60666d06e8c40fd6f6c21b0e Observable {
  observerIdentifier: {
    symbolId: Symbol(60666d06e8c40fd6f6c21b0e),
    hashId: '60666d06e8c40fd6f6c21b0e'
  },
  [Symbol(kObserverStore)]: Map(2) {
    Symbol(60666d06f9c49f1e1b62a732) => Observer { observerIdentifier: [Object] },
    Symbol(60666d06e8c40fd6f6c21b0e) => Observer { observerIdentifier: [Object] }
  }
}
Observable: Observers published
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06f9c49f1e1b62a732),
  hashId: '60666d06f9c49f1e1b62a732'
}
Observable: Calling unsubscribe observer
Observable: Detaching observer...
Observable: Detached observer 60666d06f9c49f1e1b62a732
Observable: Calling publish observers
Observable: Notifying observers...
Observer: Change `observerHashId` of Observable
Observer: Notifying observer 60666d06e8c40fd6f6c21b0e Observable {
  observerIdentifier: {
    symbolId: Symbol(60666d06e8c40fd6f6c21b0e),
    hashId: '60666d06e8c40fd6f6c21b0e'
  },
  [Symbol(kObserverStore)]: Map(1) {
    Symbol(60666d06e8c40fd6f6c21b0e) => Observer { observerIdentifier: [Object] }
  }
}
Observable: Observers published
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06f9c49f1e1b62a732),
  hashId: '60666d06f9c49f1e1b62a732'
}
Observable: Calling unsubscribe observer
Observable: Detaching observer...
Observable: Detached observer 60666d06f9c49f1e1b62a732
Observer: Calling identifier...
Observer: Containing identifier {
  symbolId: Symbol(60666d06e8c40fd6f6c21b0e),
  hashId: '60666d06e8c40fd6f6c21b0e'
}
Observable: Calling unsubscribe observer
Observable: Detaching observer...
Observable: Detached observer 60666d06e8c40fd6f6c21b0e
Observable: Calling publish observers
Observable: Notifying observers...
Observable: There is no subscribed observers
Observable: Observers published
Done in 0.17s.
Done in 0.58s.
```

[](#contributors)

## Contributors

| Author                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<img src="https://avatars0.githubusercontent.com/u/55293671?s=115&u=053dc2155e236f8590943d52bce9fea037b001f7&v=4"><br><sub>@HallexCosta</sub>](https://github.com/HallexCosta) |
