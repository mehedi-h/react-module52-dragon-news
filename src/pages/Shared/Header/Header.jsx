
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center md:pt-10 md:space-y-4'>
            <img className='mx-auto' src={logo} alt="" />
            <h4 className='text-lg font-medium text-gray-500'>Journalism Without Fear or Favour</h4>
            <h2 className='text-xl font-semibold'>{moment().format("dddd, MMMM D, YYYY")}</h2>
        </div>
    );
};

export default Header;