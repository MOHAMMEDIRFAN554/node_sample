import Summary from "./summary";

function Report() {
    return (
        <>
            <h3>Report</h3>

            <div className="line">
                <Summary rating={4.5} noOfStudents={15} batch="MEARN" />
                <Summary rating={4.2} noOfStudents={12} batch="DM" />
                <Summary rating={4.1} noOfStudents={10} batch="PROF" />
            </div>
            
        </>
    );
}

export default Report;
