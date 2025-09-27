const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


let transporter;
(async () => {
  let testAccount = await nodemailer.createTestAccount();

  transport = nodemailer.createTransport({

  host: "sandbox.smtp.mailtrap.io",

  port: 2525,

  auth: {

    user: "af24e9dde4d595",

    pass: "****96aa"

  }

});

  console.log("Ethereal Test Account Created:");
  console.log("User:", testAccount.user);
  console.log("Pass:", testAccount.pass);
})();

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role: role || "user"
    });

    // Send welcome email
    let info = await transporter.sendMail({
      from: `"Library System" <no-reply@library.com>`,
      to: email,
      subject: "Welcome to the Library ",
      html: `<h2>Hello ${name},</h2>
             <p>Your account has been created successfully.</p>
             <p>Enjoy using our Library Management System.</p>`
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    res.json({ msg: 'User registered successfully, email sent ', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send login notification email
    let info = await transporter.sendMail({
      from: `"Library System" <no-reply@library.com>`,
      to: email,
      subject: "New Login Detected ",
      html: `<h2>Hello ${user.name},</h2>
             <p>You have successfully logged into your account.</p>
             <p>If this wasn’t you, please reset your password immediately.</p>`
    });

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    

    res.json({ msg: 'Login successful, email sent ', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
