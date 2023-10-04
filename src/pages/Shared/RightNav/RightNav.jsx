
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightNav = () => {
  return (
    <div>

      {/* Login With */}
      <div className='px-4 pb-4 space-y-3 mb-6'>
        <h2 className="md:text-xl md:font-bold">Login With</h2>
        <button className="btn btn-outline w-full"><FaGoogle></FaGoogle>Login With Google</button>
        <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login With Github</button>
      </div>

      {/* Find Us On */}
      <div className='p-4 mb-6'>
        <h2 className="md:text-xl md:font-semibold mb-5">Find Us On</h2>
            <a className='flex items-center p-4 border-2 rounded-tl-md rounded-tr-md' href=""><FaFacebook className='mr-3'></FaFacebook>Facebook</a>
            <a className='flex items-center p-4 border-x-2' href=""><FaTwitter className='mr-3'></FaTwitter>Twitter</a>
            <a className='flex items-center p-4 border-2 rounded-bl-md rounded-br-md' href=""><FaInstagram className='mr-3'></FaInstagram>Instagram</a>
      </div>

      {/* Q-Zone */}
      <div className='p-4 mb-6'>
        <h2 className="md:text-xl md:font-semibold mb-5">Q-Zone</h2>
            <div className='space-y-5'>
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>
      </div>
    </div>
  );
};

export default RightNav;
