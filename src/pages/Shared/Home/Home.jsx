import Header from "../Header/Header";
import LeftNav from "../LeftNav/LeftNav";
import Navbar from "../Navbar/Navbar";
import RightNav from "../RightNav/RightNav";
import BreakingNews from "./BreakingNews/BreakingNews";


const Home = () => {
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
                    <h2 className="text-4xl">News Comming Soon!</h2>
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;