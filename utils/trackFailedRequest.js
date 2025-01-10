const FailedRequests = require("../model.js");
const sendMail = require("./sendMail.js");

const THRESHOLD = 5;
const WINDOW_TIME = 600000   //10 minutes=600000 mili-seconds

const trackFailedRequest = async (ip, reason) => {
    const timeThreshold = new Date(Date.now() - WINDOW_TIME);

    const failedRequestsCount = await FailedRequests.estimatedDocumentCount({
        user_ip: ip,
        timestamp: timeThreshold
    });

    if (failedRequestsCount > THRESHOLD) {
        sendMail(ip, reason);
    }
}

module.exports = trackFailedRequest;