# tilestrata-headers
[![NPM version](http://img.shields.io/npm/v/tilestrata-headers.svg?style=flat)](https://www.npmjs.org/package/tilestrata-headers)
[![Build Status](https://travis-ci.org/naturalatlas/tilestrata-headers.svg)](https://travis-ci.org/naturalatlas/tilestrata-headers)
[![Coverage Status](http://img.shields.io/coveralls/naturalatlas/tilestrata-headers/master.svg?style=flat)](https://coveralls.io/r/naturalatlas/tilestrata-headers)

A [TileStrata](https://github.com/naturalatlas/tilestrata) plugin for setting response headers.

```sh
$ npm install tilestrata-headers --save
```

### Sample Usage

```js
var headers = require('tilestrata-headers');

server.layer('mylayer').route('tile.png')
    .use(headers({'Cache-Control': 'max-age=3600'}));
```

## Contributing

Before submitting pull requests, please update the [tests](test) and make sure they all pass.

```sh
$ npm test
```

## License

Copyright &copy; 2015 [Natural Atlas, Inc.](https://github.com/naturalatlas) & [Contributors](https://github.com/naturalatlas/tilestrata-headers/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
