import './style.css';

function EmployeeCard(props) {
  return (
    <div className="box">
      <center><h3>{props.name}</h3></center>
      <p>Id: <b>{props.id}</b></p>
      <p>Role: <b>{props.role}</b></p>
      <p>Salary: ₹<b>{props.salary.toLocaleString()}</b></p>
    </div>
  );
}

export default EmployeeCard;
