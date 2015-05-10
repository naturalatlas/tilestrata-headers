module.exports = function(_headers) {
	return {
		reshook: function(server, tile, req, res, result, callback) {
			for (var k in _headers) {
				if (_headers.hasOwnProperty(k)) {
					result.headers[k] = _headers[k];
				}
			}
			callback();
		}
	};
};
