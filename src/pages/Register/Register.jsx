
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, url, email, password);

        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })

        .catch(error => {
            console.error(error);
        })
    }

  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-gray-200 rounded-md md:pb-20 md:pt-12 md:mx-28">
        <h1 className="md:my-5 md:text-3xl md:font-bold text-center">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="md:text-lg md:font-semibold">Your Name</span>
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
              <span className="md:text-lg md:font-semibold">Photo URL</span>
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
              <span className="md:text-lg md:font-semibold">Email</span>
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
          </div>
          <div className="md:my-4 flex gap-2">
            <input type="checkbox" name="" id="" required />
            <p>Accept our terms and conditions</p>
          </div>
          <div className="form-control my-6">
            <button className="w-full rounded bg-gray-700 text-white md:py-3 md:text-lg md:font-semibold">Register</button>
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
