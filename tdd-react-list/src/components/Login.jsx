import { useState } from "react";
export const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <form>
        <input 
          type="text" 
          placeholder="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={true}>Login </button>
        <span 
          data-testid="error"
          style={{visibility: error ? "visible" : "hidden"}}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};