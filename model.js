const mongoose = require("mongoose");

// Blueprint for storing information about failed POST requests
const failedRequestsSchema = new mongoose.Schema({
    user_ip: { type: String, required: true }, 
    reason_of_failed_request: { type: String, required: true },
    timestamp: { type: Date, default: Date.now() }
})

//Interface to interact with collections in MongoDb
const FailedRequests = mongoose.model("FailedRequests", failedRequestsSchema);

module.exports = FailedRequests; 