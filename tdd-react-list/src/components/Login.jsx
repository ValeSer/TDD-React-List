import { useState } from "react";
export const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
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