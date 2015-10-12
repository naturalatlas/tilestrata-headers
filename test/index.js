var TileServer = require('tilestrata').TileServer;
var TileRequest = require('tilestrata').TileRequest;
var headers = require('../index.js');
var assert = require('chai').assert;

describe('Response Hook Implementation "headers"', function() {
	describe('reshook()', function() {
		it('should extend existing headers', function(done) {
			var iface = headers({'Cache-Control': 'private, max-age=3600', 'X-Test': '1'});
			assert.equal(iface.name, 'headers');
			var resheaders = {'Cache-Control': 'max-age=0','X-Init':'1'};

			// server, tile, req, res, result, callback
			var result = {headers: resheaders, buffer: null, status: 200};
			iface.reshook(null, null, null, null, result, function(err) {
				if (err) throw err;
				assert.deepEqual(resheaders, {
					'Cache-Control': 'private, max-age=3600',
					'X-Test': '1',
					'X-Init':'1'
				});
				done();
			});
		});
		it('should allow function', function(done) {
			var server = new TileServer();
			var tile = TileRequest.parse('/layer/3/2/1/file.txt');
			var iface = headers(function(_server, _tile) {
				assert.equal(_server, server);
				assert.equal(_tile, tile);
				return {
					'X-Test': [_tile.z, _tile.x, _tile.y].join('/')
				};
			});

			var resheaders = {'Cache-Control': 'max-age=0'};
			var result = {headers: resheaders, buffer: null, status: 200};

			iface.reshook(server, tile, null, null, result, function(err) {
				if (err) throw err;
				assert.deepEqual(resheaders, {
					'Cache-Control': 'max-age=0',
					'X-Test': '3/2/1'
				});
				done();
			});
		});
	});
});
