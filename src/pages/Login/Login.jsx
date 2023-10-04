import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

  const { logIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        logIn(email, password)
        .then(res => {
          console.log(res.user);
        })
        .catch(error => {
          console.error(error)
        })
    }

  return (
    <div className="md:py-12">
      <Navbar></Navbar>
      <div className="bg-gray-200 rounded-md md:pb-20 md:pt-12 md:mx-28">
        <h1 className="md:text-3xl font-bold text-center">Login your account</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="md:text-lg md:font-semibold">Email Address</span>
            </label>
            <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="md:text-lg md:font-semibold">Password</span>
            </label>
            <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
            />
            <label className="label">
              <a href="#" className="link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control my-6">
            <button className="w-full rounded bg-gray-700 text-white md:py-3 md:text-lg md:font-semibold">Login</button>
          </div>
          <p className="text-center text-base md:text-lg font-medium">
            Do not have an account? Please 
            <Link to="/register" className="text-red-500 md:pl-2 underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
