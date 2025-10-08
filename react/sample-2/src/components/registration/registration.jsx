
function Registration() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
            }}
        >
            <div
                style={{
                    background: "#fff",
                    padding: "40px 32px",
                    borderRadius: "12px",
                
                    boxShadow: "0 4px 24px rgba(25, 118, 210, 0.12)",
                    minWidth: "350px",
                    maxWidth: "90vw",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "32px",
                        color: "#1976d2",
                        fontWeight: "600",
                        letterSpacing: "1px",
                    }}
                >
                    Registration
                </h2>
                <form>
                    <div style={{ marginBottom: "20px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "500",
                                color: "#333",
                            }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #bdbdbd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "500",
                                color: "#333",
                            }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #bdbdbd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div style={{ marginBottom: "28px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "500",
                                color: "#333",
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #bdbdbd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            placeholder="Enter password"
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            background: "#1976d2",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: "16px",
                            boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
                            transition: "background 0.2s",
                        }}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registration;