import banner1 from './../../../assets/img/about/forhad.jpg';
import banner2 from './../../../assets/img/about/cv.jpg';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='my-12'>
            <PageTitle title={'About Me'}></PageTitle>
            <section className="overflow-hidden  bg-white dark:bg-dark" id="about">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="py-3 sm:py-4 flex justify-end items-center">
                                <img
                                    src={banner1}
                                    alt=""
                                    className="w-3/4 rounded-2xl"
                                />
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                    Exploring Forhad Islam's Tech Universe
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    Hello! I'm Forhad Islam, a dedicated developer passionate about crafting seamless digital experiences. With expertise in HTML, CSS, and JavaScript, MongoDB, Firebase, and Express...
                                    Explore my portfolio to witness my projects and collaborations that reflect my dedication to innovation and craftsmanship in the digital realm.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    Driven by an insatiable curiosity, I'm always exploring new technologies and methodologies to push the boundaries of what's possible in web development. I thrive on transforming concepts into functional, user-centric applications.
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
