import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
        
    }, [])

    return (
        <div>
            <h2 className="md:pb-3 md:text-xl md:font-semibold">All Categories</h2>
            {
                categories.map(category => 
                    <Link
                        to={`/category/${category.id}`}
                        className="block pl-5 py-3 font-semibold text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-md"
                        key={category.id}>
                        {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftNav;