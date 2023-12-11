import About from "../../About/About";
import Header from "../../Header/Header";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import MySkill from "../MySkill/MySkill";
import Portfolio from "../Projects/OurProjects";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Portfolio></Portfolio>
            <MySkill></MySkill>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;