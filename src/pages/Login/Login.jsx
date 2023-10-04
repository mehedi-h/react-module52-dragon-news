import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));
        console.log(form.get('password'));
    }

  return (
    <div className="md:py-12">
      <Navbar></Navbar>
      <div className="bg-gray-200 rounded-md md:pb-28 md:pt-12 md:mx-28">
        <h1 className="md:text-xl font-semibold text-center">Login your account</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
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
              <span className="label-text">Password</span>
            </label>
            <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control my-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center text-base md:text-lg font-medium">
            Do not have an account? Please <Link to="/register" className="text-red-500 underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
