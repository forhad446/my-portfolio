import About from "../../About/About";
import Header from "../../Header/Header";
import MySkill from "../../MySkill/MySkill";
import Portfolio from "../Projects/OurProjects";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <MySkill></MySkill>
        </div>
    );
};

export default Home;