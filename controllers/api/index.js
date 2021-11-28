const router = require("express").Router();

const userRoutes = require("./user-routes");
const blogPostRoutes = require("./post-routes");

router.use("/users", userRoutes);
router.use("/posts", blogPostRoutes);

module.exports = router;