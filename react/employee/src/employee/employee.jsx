import { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import './style.css';

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [salary, setSalary] = useState('');

  const fetchEmployees = () => {
    fetch('http://localhost:5000/employees')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!name || !role || !salary) return alert("All fields are required!");

    const response = await fetch('http://localhost:5000/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, role, salary: Number(salary) })
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      setName('');
      setRole('');
      setSalary('');
      fetchEmployees(); 
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <center><h1>EMPLOYEE DETAILS</h1></center>

      <form onSubmit={handleAdd} style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      <div className="line">
        {employees.map(emp => (
          <EmployeeCard
            key={emp._id}
            name={emp.name}
            role={emp.role}
            salary={emp.salary}
          />
        ))}
      </div>
    </>
  );
}

export default Employee;
