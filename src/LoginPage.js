import React, { useState } from "react";


function LoginPage() {
  // React States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    if(username==="user" && password === "password")
        {
            setError("");
            setIsSubmitted(true);
        }
        else{
            setError("Invalid username or password");
            setIsSubmitted(false);
        }

  }

  return (
    <div>
        <h1>Login Page</h1>
        {isSubmitted ?(<div>
            <p>Welcome, {username}!</p>
            </div>):(<form onSubmit={handleSubmit}>
                {error && <p className="error">{error}</p>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username"
                    placeholder="username"
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)} required/>

                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password"
                    placeholder="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)} required/>
                    
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>)}
   
    </div>
  );
}

export default LoginPage;