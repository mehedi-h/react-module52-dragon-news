
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));
        console.log(form.get('password'));
    }

  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-gray-200 rounded-md md:pb-28 md:pt-12 md:mx-28">
        <h1 className="md:text-xl font-semibold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="url"
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control my-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center text-base md:text-lg font-medium">
            Already have an account? Please 
            <Link to="/login" className="text-green-500 md:pl-2 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
