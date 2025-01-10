const { success } = require("../utils/responseWrapper");

const successfulRequestFunc = (req, res) => {
    return res.send(success(200, {}));
}

module.exports = successfulRequestFunc;