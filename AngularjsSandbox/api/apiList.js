var uuid = require('node-uuid');

module.exports = [{
    path: 'api/getCurrentUser',
    fn: function(req, res) {
        res.send(true);
    }
}];
