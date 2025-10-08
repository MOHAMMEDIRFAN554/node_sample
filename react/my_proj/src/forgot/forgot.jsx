import './forgot.css'
function Forgot(){
    return(
         <div className="form-container">
            <h2>FORGOT PASSWROD</h2>
        <form>
            <input type="email" placeholder="Email" />
            <br />

            <input type="password" placeholder="New Passwrod" />
            <br />
            <input type="password" placeholder="Re-enter Password" />
            <br />
            
            <br />
            <br />
            <button type="submit">Reset</button>
        </form>
        </div>
    )
}
export default Forgot