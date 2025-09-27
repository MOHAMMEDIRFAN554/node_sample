function clickMe(){
    alert("Clicked")
}
function Login(){
    return(
       
        <div>
     
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button onClick={clickMe} type="submit" className='btn-black'>Login</button>
      <br />
      <button type="submit" className='btn-white'>Login</button>

    
    </div>
    );
}

export default Login