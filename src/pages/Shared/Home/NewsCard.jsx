import { BsBookmarkStar, BsShare, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const NewsCard = ({news}) => {

    const { title,details, author, rating, image_url, total_view,_id } = news

    return (
        <div className='md:py-5 space-y-4 rounded-md shadow-lg'>
            <div className="bg-gray-200 rounded md:px-5 md:py-4 flex justify-between items-center">
                <div className="flex gap-3">
                    <div>
                        <img className="w-12 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h6 className='md:font-semibold'>{author.name}</h6>
                        <p><small className='md:text-sm md:font-normal'>{author.published_date}</small></p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button><BsBookmarkStar></BsBookmarkStar></button>
                    <button><BsShare></BsShare></button>
                </div>
            </div>
            <div className='md:px-4'>
                <h2 className='md:text-lg md:font-semibold'>{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length > 200 
                        ? <p className='md:py-5 leading-7'>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='md:px-2 md:text-lg md:font-medium text-blue-600'>Read More...</Link> </p>
                        : <p className='md:py-5 leading-7'>{details}</p>
                }
                <div className='flex justify-between items-center'>
                    <div>
                        {rating.number}
                    </div>
                    <div className='flex gap-3 items-center'>
                        <BsEyeFill></BsEyeFill>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;