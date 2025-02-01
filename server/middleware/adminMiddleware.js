function adminCheck(req, res, next) {
    if (req.query.admin === "true") {
        next(); // Allow access to the route
    } else {
        res.status(400).send("<h1>Error: Unauthorized access</h1>");
    }
}

export default adminCheck;