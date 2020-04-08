<h1 align="center">@compactjs/assign</h1>
<h3 align="center">Recursive assign for objects and arrays</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/assign" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/assign.svg">
  </a>
  <a href="https://github.com/CompactJS/assign/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/assign" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/assign#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/assign/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/assign
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/assign/dist/index.umd.js"></script>
```

## Usage

### As module:

```javascript
import { assign } from '@compactjs/assign';
```

### Example:

```javascript
const target = {
  boolean: true,
  string: 'abc',
  object: { number: 0, any: 0 },
};
const source = ['34', 'abc', [14, 2]];

assign(target, source);

console.log(target);
// prints:
// {
//   boolean: '34',
//   string: 'abc',
//   object: { number: 14, any: 2 },
// }
```

Check out the [index.test.js](https://github.com/CompactJS/assign/blob/master/test/index.test.js) file for more examples.

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/assign/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/assign/blob/master/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
