import Users from "../models/userModel.js"


export const register = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    // Validate fields
    if (!(firstName || lastName || email || password)) {
        next("Provide Required Fields!");
        return;
    }

    try {

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }

}