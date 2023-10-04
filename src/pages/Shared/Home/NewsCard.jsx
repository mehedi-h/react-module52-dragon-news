import { BsBookmarkStar, BsShare, BsEyeFill } from 'react-icons/bs';


const NewsCard = ({news}) => {

    const { title,details, author, rating, thumbnail_url, total_view } = news

    return (
        <div className='md:py-5 space-y-4'>
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
            <h2 className='md:text-lg md:font-semibold'>{title}</h2>
            <img className="w-full h-[300px]" src={thumbnail_url} alt="" />
            <p className='md:py-5 leading-7'>{details}</p>
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
    );
};

export default NewsCard;