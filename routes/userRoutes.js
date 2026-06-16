const express = require("express");

const router = express.Router();

const {
    registerUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser
} = require("../controllers/userControllers");


router.post("/register", registerUser);

router.get("/users", getAllUsers);

router.get("/user/:email", getUserByEmail);

router.put("/user/:email", updateUser);

router.delete("/user/:email", deleteUser);


module.exports = router;