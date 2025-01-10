const FailedRequests = require("../model.js");
const trackFailedRequest = require("./trackFailedRequest.js");

const saveFailedRequest = async (ip, reason) => {
    // Saving entry of details request in DB
    await FailedRequests.create({
        user_ip: ip,
        reason_of_failed_request: reason
    })
    
    // Track the failed request
    trackFailedRequest(ip, reason)
}

module.exports = saveFailedRequest;