import { useState } from "react";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import img1 from "./../../../../assets/img/projects/1.png"
import img2 from "./../../../../assets/img/projects/2.png"
import img3 from "./../../../../assets/img/projects/3.png"
import img4 from "./../../../../assets/img/projects/4.png"
import img5 from "./../../../../assets/img/projects/5.png"
import img6 from "./../../../../assets/img/projects/6.png"

const Portfolio = () => {
    const [showCard, setShowCard] = useState("all");

    const handleProject = (category) => {
        setShowCard(category);
    };

    return (
        <>
            <PageTitle
                title={'My Recent Projects'}
            ></PageTitle>
            <section className=" ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4" id="projects">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <p className="text-body-color text-base dark:text-dark-6">
                                    Welcome to a showcase of my recent projects, where innovation meets functionality. These projects reflect my journey in web development, highlighting my skills in HTML, CSS, JavaScript, Tailwind CSS, MongoDB, Firebase, and Expres
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-wrap justify-center -mx-4" >
                        <div className="w-full px-4">
                            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("all")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "all"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        All Projects
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("branding")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "branding"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Branding
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("design")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "design"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Design
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("marketing")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "marketing"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Marketing
                                    </button>
                                </li>
                                <li className="mb-1">
                                    <button
                                        onClick={() => handleProject("development")}
                                        className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCard === "development"
                                                ? "activeClasses bg-primary text-white"
                                                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                                            }`}
                                    >
                                        Development
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <PortfolioCard
                            ImageHref={img1}
                            category="Branding"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="https://fitness-first-b6301.web.app/"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={img2}
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="https://job-spotnet.web.app/"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={img3}
                            category="marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="https://mr-computer-303fc.web.app/"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={img4}
                            category="Development"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="http://cautious-day.surge.sh/"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={img5}
                            category="Design"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="http://grandiose-owner.surge.sh/"
                            showCard={showCard}
                        />
                        <PortfolioCard
                            ImageHref={img6}
                            category="Marketing"
                            title="Creative Agency"
                            button="View Details"
                            buttonHref="http://dirty-yak.surge.sh/"
                            showCard={showCard}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;

const PortfolioCard = ({
    showCard,
    category,
    ImageHref,
    title,
    button,
    buttonHref,
}) => {
    return (
        <>
            <div
                className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === "all" || showCard === category.toLowerCase()
                        ? "block"
                        : "hidden"
                    }`}
            >
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-[10px]">
                        <img src={ImageHref} alt="portfolio" className="w-full" />
                    </div>
                    <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
                        <span className="text-primary mb-2 block text-sm font-medium">
                            {category}
                        </span>
                        <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
                        <a
                            href={buttonHref}
                            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
                        >
                            {button}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
