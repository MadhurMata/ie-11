const polyfillLibrary = require('polyfill-library');

const polyfillBundle = polyfillLibrary.getPolyfillString({
	uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
	minify: true,
	features: {
		'es6': { flags: ['gated'] }
	}
}).then(function(bundleString) {
	console.log(bundleString);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
