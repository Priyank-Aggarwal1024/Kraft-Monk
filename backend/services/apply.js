const createDetails = async (details) => {
    console.log(details);
    return {
        error: false,
        details,
        message: "Apply Internship Successfully"
    }
}


module.exports = { createDetails }