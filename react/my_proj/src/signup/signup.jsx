import './signup.css'
function Signup(){
    return(
         <div className="form-container">
            <h2>Sign Up</h2>
        <form>

            <input type="text" placeholder="User Name" />
            <br />
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
export default Signup

