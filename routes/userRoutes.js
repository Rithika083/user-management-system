const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
    registerUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser
} = require("../controllers/userControllers");


router.post("/register", registerUser);

router.get("/users", protect , getAllUsers);

router.get("/user/:email", getUserByEmail);

router.put("/user/:email", updateUser);

router.delete("/user/:email", deleteUser);


module.exports = router;
