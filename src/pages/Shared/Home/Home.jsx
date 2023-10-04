import { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import Navbar from "../Navbar/Navbar";
import RightNav from "../RightNav/RightNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const Home = () => {

    const newsData = useLoaderData()
    // console.log(newsData);

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
                        newsData.map(news => <NewsCard 
                        key={news._id} news={news}></NewsCard>)
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