export const Login = () => {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button disabled="true">Login </button>
        <span>Something went wrong</span>
      </form>
    </div>
  );
};