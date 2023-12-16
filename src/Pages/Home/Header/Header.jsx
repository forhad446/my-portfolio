import banner from "./../../../assets//img/banner.jpeg";

const Header = () => {
    return (
        <section id="header" style={{ backgroundImage: `url(${banner})` }}
            className="relative text-white  bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-bold sm:text-5xl ">
                        Hi I'm

                        <strong className="block font-semibold "> Forhad Islam </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Explore my portfolio to witness my projects and collaborations that reflect my dedication to innovation and craftsmanship in the digital realm.
                    </p>

                    <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Download Resume
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;