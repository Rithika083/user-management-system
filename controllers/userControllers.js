const User = require("../models/User");


// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.send("Name and Email are required");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("Email already registered");
        }

        const user = await User.create({
            name,
            email
        });

        console.log("User Created:");
        console.log(user);

        res.send("User Registered Successfully");

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        console.log("All Users Requested");
        console.log(users);

        res.json(users);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Get User By Email
const getUserByEmail = async (req, res) => {
    try {
        const email = req.params.email;

        const user = await User.findOne({ email });

        console.log("Searching for:", email);

        if (!user) {
            console.log("User not found");
            return res.send("User not found");
        }

        console.log("User Found:");
        console.log(user);

        res.json(user);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Update User
const updateUser = async (req, res) => {
    try {
        const email = req.params.email;

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { name: req.body.name },
            { new: true }
        );

        if (!updatedUser) {
            return res.send("User not found");
        }

        console.log("Updated User:");
        console.log(updatedUser);

        res.send("User updated successfully");

    } catch (error) {
        res.status(500).send(error.message);
    }
};


// Delete User
const deleteUser = async (req, res) => {
    try {
        const email = req.params.email;

        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.send("User not found");
        }

        console.log("Deleted User:");
        console.log(deletedUser);

        res.send("User deleted successfully");

    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports = {
    registerUser,
    getAllUsers,
    getUserByEmail,
    updateUser,
    deleteUser
};