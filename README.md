# ![Streamix Logo](extras/logo.png)
Streamix is a Node.js (io.js) library for Streaming &amp; mixing of data over mutiple protocols.

## Usage

Require the streamix module from your Node script:

```js
var mix = require('../libs/streamix'); // for example
```

Then, you need to provide the parameters to handle streams as:

```js
var params = {
  inputs: [
  	'protocol://path/to/input/stream1',
  	'protocol://path/to/input/stream2'
  ],
  output: 'protocol://path/to/output',
  profile: 'name-of-profile'
}
```

Lastly, just invoke the `mix` with the `params`:

```js
mix(params);
```

For more details, check out the [API guide](docs/api.md) (WIP) & [included test cases](test).

## License

For non-commercial use, streamix is available under the terms of the [Mozilla Public License v2.0](LICENSE).

For commercial uses, streamix is available as a premium library from Applait. For pricing and licensing details for commercial use, please get in touch with `contact@applait.com`.

---

Copyright (c) 2015 [Applait Technologies LLP](http://applait.com).
