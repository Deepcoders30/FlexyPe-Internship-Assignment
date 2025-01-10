const FailedRequests = require("../model");
const { success } = require("../utils/responseWrapper");

const failedRequestDetails = async (req, res) => {
    const allFailedRequestsDetails = await FailedRequests.find({});
    return res.send(success(200, allFailedRequestsDetails));
}

const filterFailedRequestsByIP = async (req, res) => {
    const { ip } = req.params;
    const filteredBYIPDetails = await FailedRequests.find({
        where: {
            user_ip: ip
        }
    });

    return res.send(success(200, filteredBYIPDetails));
}

module.exports = { failedRequestDetails, filterFailedRequestsByIP }