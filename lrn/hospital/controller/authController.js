const User = require('../model/userModel')
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
    try {
        const { name, email, password, role, phone, place, createdAt } = req.body
        const user = await User.create({
            name,
            email,
            password,
            role: role || "admin",
            phone,
            place,
            createdAt
        });
        res.json({
            msg: `${user.role} created successfully `,
            user: user
        });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }


}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ msg: 'User not found⚙️ ' });
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.status(401).json({ msg: 'Invalid Password' });


        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log("LoGiN SuCcEsSfUl", token)

        res.json({ msg: 'Login successful , Token generated', token })

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

