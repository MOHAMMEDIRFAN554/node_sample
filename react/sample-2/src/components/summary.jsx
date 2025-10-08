import './summary.css';

function Summary(props) {
  return (
    <div className="box">
      <center><h3>{props.batch}</h3></center>
      No of students : <b>{props.noOfStudents}</b>
      <br />
      Rating: <b>{props.rating}</b>
    </div>
  );
}

export default Summary;
