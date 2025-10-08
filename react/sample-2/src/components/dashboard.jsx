import { useState } from "react";
import "./dash.css";

function Dashboard() {
    const [names, setName] = useState([
        { name: "kk", age: 25, mark: 80 },
        { name: "sali", age: 22, mark: 75 },
        { name: "tintu", age: 24, mark: 85 },   
        { name: "aswin", age: 27, mark: 90 },
        { name: "leo", age: 21, mark: 78 },
        { name: "irfan", age: 20, mark: 88 },
        { name: "govind", age: 22, mark: 82 },
        { name: "shiva", age: 25, mark: 79 }
    ])

    


    return (
        <>
            <h2>Welcome to Dashboard</h2>
            <div>
                <div className="dashboard-container">
                    <ol>
                    {names.map((name, ind) => (
                        <li key={ind}>{name.name}</li>
                    ))}
                </ol>
                </div>
                

               <div className="dashboard-container">
                 <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Mark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((name, ind) => (
                                <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <td>{name.name}</td>
                                    <td>{name.age}</td>
                                    <td>{name.mark}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               </div>
            </div>
        </>
    )
}

export default Dashboard