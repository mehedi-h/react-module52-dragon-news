
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full"><FaGoogle></FaGoogle>Login With Google</button>
        <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login With Github</button>
      </div>
      <div className='p-4 mb-6'>
        <h2 className="text-2xl font-bold mb-5">Find Us On</h2>
            <a className='flex items-center p-4 border-2 rounded-tl rounded-tr' href=""><FaFacebook className='mr-3'></FaFacebook>Facebook</a>
            <a className='flex items-center p-4 border-x-2' href=""><FaTwitter className='mr-3'></FaTwitter>Twitter</a>
            <a className='flex items-center p-4 border-2 rounded-bl rounded-br' href=""><FaInstagram className='mr-3'></FaInstagram>Instagram</a>
      </div>
    </div>
  );
};

export default RightNav;
