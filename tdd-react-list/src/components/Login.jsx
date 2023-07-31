import { useState } from "react";
export const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const clickHandler = async (e) => {
    e.preventDefault();
    try{
      const {data} = axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
        );
        setUser(data);
    }catch{
      setError(true);
    }
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
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
        <button 
          disabled={!username || !password}
          onClick={clickHandler}
        >
          Login 
        </button>
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