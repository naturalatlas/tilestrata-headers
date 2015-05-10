var TileServer = require('tilestrata').TileServer;
var TileRequest = require('tilestrata').TileRequest;
var headers = require('../index.js');
var assert = require('chai').assert;

describe('Response Hook Implementation "headers"', function() {
	describe('reshook()', function() {
		it('should extend existing headers', function(done) {
			var iface = headers({'Cache-Control': 'private, max-age=3600', 'X-Test': '1'});
			var resheaders = {'Cache-Control': 'max-age=0','X-Init':'1'};

			iface.reshook(null, null, null, null, resheaders, null, function(err) {
				assert.isTrue(typeof err === 'undefined');
				assert.deepEqual(resheaders, {
					'Cache-Control': 'private, max-age=3600',
					'X-Test': '1',
					'X-Init':'1'
				});
				done();
			});
		});
	});
});
