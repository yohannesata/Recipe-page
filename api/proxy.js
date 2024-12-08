const request = require("request");

module.exports = (req, res) => {
    // Get the stream URL from the query string
    const streamUrl = req.query.url;

    if (!streamUrl) {
        return res.status(400).send("Error: URL is required.");
    }

    const options = {
        url: streamUrl,
        headers: {
            "Referer": "https://embedme.top/", // Custom Referer
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0", // Custom User-Agent
        },
    };

    // Make the request to the stream URL and forward the response to the client
    request(options).pipe(res);
};