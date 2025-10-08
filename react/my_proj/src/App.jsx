import { useState } from "react";
import "./App.css";
import Signup from "./signup/signup";
import Login from "./login/login";
import Forgot from "./forgot/forgot";

function App() {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <div className="app-container">
      <div className="tabs">
        <button
          className={activeTab === "signup" ? "tab active" : "tab"}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
        <button
          className={activeTab === "login" ? "tab active" : "tab"}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "forgot" ? "tab active" : "tab"}
          onClick={() => setActiveTab("forgot")}
        >
          Forgot Password
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "signup" && <Signup />}
        {activeTab === "login" && <Login />}
        {activeTab === "forgot" && <Forgot />}
      </div>
    </div>
  );
}

export default App;
