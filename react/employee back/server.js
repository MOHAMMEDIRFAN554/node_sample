const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://irfanMuthu554:Irfan554@cluster0.pbjdfkv.mongodb.net/')
  .then(() => console.log(' Connected to MongoDB Atlas'))
  .catch(err => console.error(' MongoDB connection error:', err));

const employeeSchema = new mongoose.Schema({
  name: String,
  role: String,
  salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);


app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});
app.post('/employees', async (req, res) => {
  try {
    const { name, role, salary } = req.body;

    if (!name || !role || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = new Employee({ name, role, salary });
    await newEmployee.save();

    res.status(201).json({ message: "Employee added successfully", employee: newEmployee });
  } catch (err) {
    res.status(500).json({ message: "Error adding employee", error: err.message });
  }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
