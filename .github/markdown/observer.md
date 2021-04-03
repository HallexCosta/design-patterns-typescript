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
  - [Test Coverage](#test-coverage)
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

[](#test-coverage)

## Test Coverage

```sh
# Run test (add the `--watch` flag after the word test if you want to watch the tests)
$ yarn workspace @design-patterns-typescript/observer test
# ---------------------------
# Run test coverage
$ yarn workspace @design-patterns-typescript/observer test:ci

```

<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="Observable.ts"><a href="Observable.ts.html">Observable.ts</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="37" class="abs high">37/37</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="10" class="abs high">10/10</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="37" class="abs high">37/37</td>
	</tr>

<tr>
	<td class="file high" data-value="Observer.ts"><a href="Observer.ts.html">Observer.ts</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="29" class="abs high">29/29</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="7" class="abs high">7/7</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="29" class="abs high">29/29</td>
	</tr>

<tr>
	<td class="file high" data-value="index.ts"><a href="index.ts.html">index.ts</a></td>
	<td data-value="90.91" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 90%"></div><div class="cover-empty" style="width: 10%"></div></div>
	</td>
	<td data-value="90.91" class="pct high">90.91%</td>
	<td data-value="11" class="abs high">10/11</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="4" class="abs medium">3/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="4" class="abs high">4/4</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	</tr>

</tbody>
</table>

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
