module.exports = function(_headers) {
	return {
		hook: function(server, tile, req, res, headers, buffer, callback) {
			for (var k in _headers) {
				if (_headers.hasOwnProperty(k)) {
					headers[k] = _headers[k];
				}
			}
			callback();
		}
	};
};