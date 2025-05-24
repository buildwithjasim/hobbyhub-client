import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate, Link } from 'react-router';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    // Password validation
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      return setError('Password must be at least 6 characters.');
    }
    if (!uppercase.test(password)) {
      return setError('Password must contain at least one uppercase letter.');
    }
    if (!lowercase.test(password)) {
      return setError('Password must contain at least one lowercase letter.');
    }

    setError('');

    try {
      const result = await register(email, password, name, photoURL);
      await updateProfile(result.user, { displayName: name, photoURL });
      toast.success('Registration successful!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error('Registration failed!');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-base-200 border shadow-xl m-10 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL"
          className="input input-bordered w-full"
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
          Register
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
