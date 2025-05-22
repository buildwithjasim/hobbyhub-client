import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
      toast.success('Login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      toast.error('Login failed!');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success('Google Login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Google Login failed!');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 border shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
      <div className="mt-4 flex flex-col items-center">
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Login with Google
        </button>
        <p className="mt-3">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
