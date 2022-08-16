// CONTROL FUNCTIONS
const _404 = (req, res) => {
    const route = req.url;
    res.render("_404", { title: route, route });
};

// EXPORTS
module.exports = { _404 };
