const User = require('../model/userModel')
const getNextSequence = require('../utils/getNextSequence');
const item= require('../model/billModels')

exports.createUser = async (req, res) => {
  try {
    const newId = await getNextSequence("userId");
    const user = await User.create({ userId: newId, ...req.body })
    res.status(201).send(`user created successfully ${user.name}`)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
exports.createBill = async (req, res) => {
  try {
    const newId = await getNextSequence("billId");
    const user = await item.create({ userId: newId, ...req.body })
    res.status(201).send(`bill created successfully ${user.name}`)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  }
  catch (err) {
    res.status(500).json({ error: err.message })
  }
}
exports.findOne = async (req, res) => {
  try {
    const find = req.body;
    const user = await User.findOne(find);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;  
    const user = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;  
    const user = await User.findByIdAndDelete(id);

    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



