/**
 * Make the call to the user given the:
 * 1. Name
 * 2. Phone Number
 * 3. Trail number
 */
twilio = require('twilio');

module.exports = function(req, res) {
    res.send(req.params);    
}
