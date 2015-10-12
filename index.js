module.exports = function(headers) {
	var fn = (typeof headers === 'function') ? headers : function(server, tile) {
		return headers;
	};

	return {
		name: 'headers',
		reshook: function(server, tile, req, res, result, callback) {
			var _headers = fn(server, tile);
			if (!_headers) return callback();
			for (var k in _headers) {
				if (_headers.hasOwnProperty(k)) {
					result.headers[k] = _headers[k];
				}
			}
			callback();
		}
	};
};
