const router = require('express').Router();
const successfulRequestFunc = require('../controllers/successfulRequestController.js');
const validateRequest = require("../middlewares/validateRequest.js");
const metricsController = require("../controllers/metricsController.js");


router.post("/submit", validateRequest, successfulRequestFunc);
router.get("/metrics", metricsController.failedRequestDetails);
router.get("/metrics/:ip", metricsController.filterFailedRequestsByIP);


module.exports = router;    