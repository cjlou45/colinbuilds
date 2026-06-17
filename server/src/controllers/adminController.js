import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function login(req, res) {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({
            message: "Password is required"
        });
    }

    const validPassword = await bcrypt.compare(
        password,
        process.env.ADMIN_PASSWORD_HASH
    );

    if (!validPassword) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );

    res.json({ token });
}