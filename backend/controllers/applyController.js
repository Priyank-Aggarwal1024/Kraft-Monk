const { createDetails } = require("../services/apply");

module.exports.applyInternship = async (req, res) => {
    const { details } = req.body;
    if (!details) {
        return res.status(403).json({
            error: false,
            message: "No details provided"
        })
    }
    try {
        const data = await createDetails(details);
        res.json(data);
    } catch (err) {
        res.status(400).json({
            error: true,
            message: "Internal Server Error"
        })
    }
}