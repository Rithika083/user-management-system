const express = require("express");
const router = express.Router();


const { protect , adminOnly } = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getProfile ,
    updateProfile,
    getAllUsers
} = require("../controllers/authController");

router.get("/profile", protect, getProfile);
router.get(
    "/users",
    protect,
    adminOnly,
    getAllUsers
);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/profile", protect, updateProfile);

module.exports = router;