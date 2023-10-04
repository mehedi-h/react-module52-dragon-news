import { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import Navbar from "../Navbar/Navbar";
import RightNav from "../RightNav/RightNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {

    const [allNews, setAllNews] = useState([])

    useEffect(() => {
    fetch('news.json')
    .then(res => res.json())
    .then(data => setAllNews(data))
    },[])

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="grid md:grid-cols-4 gap-10">
                <div>
                    <LeftNav></LeftNav>
                </div>

                <div className="md:col-span-2">
                    <h2 className="md:text-xl md:font-semibold">Dragon News Home</h2>
                    {
                        allNews.map(news => console.log(news))
                    }
                </div>

                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;