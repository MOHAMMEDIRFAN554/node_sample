import './login.css'
function Login(){
    return(
         <div className="form-container">
            <h2>LOG IN</h2>
        <form>
            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Login

