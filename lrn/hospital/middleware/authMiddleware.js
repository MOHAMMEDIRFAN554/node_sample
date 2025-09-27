const jwt = require('jsonwebtoken')
const user = require('../model/userModel')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')
        if (!token) return res.status(401).json({ msg: "no token ⚙️ ,authorization denied" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id).select('-password')
        next()

    } catch(err) {
        res.status(401).json({msg:'Token ⚙️  is not valid ' })

    }
}

module.exports = auth