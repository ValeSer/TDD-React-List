export const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" value="username"/>
        <input type="password" placeholder="password" value="password"/>
        <button>Login </button>
      </form>
    </div>
  );
};