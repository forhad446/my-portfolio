import { Children } from "react";

const PageTitle = ({ title }) => {
    return (
        <>
            <div>
                <h2 className="text-dark py-5 text-3xl font-bold sm:text-4xl md:text-[40px] text-center">
                    {title}
                </h2>
                <div className="divider"></div> 
            </div>
        </>
    );
};

export default PageTitle;