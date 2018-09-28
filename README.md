## airports

ANA airports utilities.

## Getting started

```
$ yarn add ezsfc
```

or

```
$ npm i -S ezsfc
```

## Usage

```javascript
const airports = require('airports')

airports.filterByKeyword('那覇')
// => [ { iata: 'OKA', name: '那覇', aliases: [ '沖縄' ] } ]

airports.filterByKeyword('東京')
// => [ { iata: 'HND', name: '羽田', groups: [ '東京' ] },
//      { iata: 'NRT', name: '成田', groups: [ '東京' ] } ]
```

## License
MIT &copy; Pine Mizune
