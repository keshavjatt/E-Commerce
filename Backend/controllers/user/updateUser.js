const userModel = require("../../models/userModel");

async function updateUser(req, res) {
    try {
        const { role } = req.body;  // user role ko body se fetch karte hain
        const userId = req.userId;   // authToken se userId mil rahi hai

        if (!role) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Role is required"
            });
        }

        // User ko database se dhoondhte hain
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: true,
                message: "User not found"
            });
        }

        // User role ko update karte hain
        user.role = role;
        await user.save();

        res.status(200).json({
            success: true,
            error: false,
            message: "User role updated successfully",
            data: user
        });

    } catch (err) {
        // console.log(err);
        res.status(500).json({
            success: false,
            error: true,
            message: "Internal Server Error",
        });
    }
}

module.exports = updateUser;
