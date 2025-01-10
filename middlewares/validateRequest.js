const { error } = require("../utils/responseWrapper.js");
const saveFailedRequest = require("../utils/saveFailedRequest.js");


const validateRequest = async (req, res, next) => {
    // Validate Content-Type header
    if (req.headers['content-type'] !== 'application/json') {
        await saveFailedRequest(req.ip, "Invalid Content-Type");
        return res.send(error(400, "Invalid Content-Type."));
    }

    // Check if Authorization header is missing or invalid
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer")
    ) {
        await saveFailedRequest(req.ip, "Access Token Missing");
        return res.send(error(401, "Access Token Missing."));
    }

    // Extract and validate the access token
    const accessToken = req.headers.authorization.split(" ")[1];
    if (accessToken !== process.env.TESTING_ACCESS_TOKEN) {
        await saveFailedRequest(req.ip, "Invalid Access Token");
        return res.send(error(401, "Invalid Access Token"));
    }

    // Empty body validation
    if (!req.body || Object.keys(req.body).length === 0) {
        await saveFailedRequest(req.ip, "Empty request body");
        return res.send(error(400, "Empty request body"));
    }

    next();

}

module.exports = validateRequest;