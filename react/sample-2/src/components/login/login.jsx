import './login.css'
function Login() {
    return (
        <div className="login-bg">
            <div className="login-container">
                <h2 className="login-title">
                    Login to Your Account
                </h2>
                <form>
                    <div className="login-form-group">
                        <label className="login-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="login-input"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="login-form-group">
                        <label className="login-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Enter password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;