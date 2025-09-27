import './signup.css'
function Signup() {
  return (
    <div>
      

      <div className="login-container">
        <form action="signup" method="post">
          <h2>Sign Up</h2>

          <label htmlFor="username">Name</label>
          <input type="text" placeholder="Enter your name" id="username" name="username" required />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" id="password" name="password" required />

          <button type="submit">Sign Up</button>

          <p style={{ textAlign: "center" }}>OR</p>
          <p style={{ textAlign: "center" }}>
            Already have an account? <a href="#">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
