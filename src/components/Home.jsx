const Home = () => {
  const { VITE_CLIENT_ID } = import.meta.env;
  const redirectUrl = "http://localhost:5173/redirect";
  const scope = "read";
  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${VITE_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
