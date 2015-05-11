/**
 * The twiml responses given the id of the required twiml, this allows several twiml responses with different ids
 */
twilio = require('twilio');

module.exports = function(req, res) {
    var body = "";
        
    if (req.params.id == "1") {
        body = '<xml></xml>';
    }

    // write the string to the output stream
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'application/xml'
    });   
    res.write(body);
    res.end();
   
}
