import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import PageTitle from '../../../Shared/PageTitle/PageTitle';


const MySkill = () => {
    return (
        <div className="">
            <PageTitle title={'Skill Showcase'}></PageTitle>
            <div id="mySkill">
                <p className='mx-auto mb-[60px] max-w-[510px] text-center'>
                    Welcome to my skills showcase, where technical prowess meets innovation. I've honed a versatile skill set encompassing:
                </p>
            </div>
            <section className='grid grid-cols-1 lg:grid-cols-4 gap-8 justify-center'>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>HTML</h2>
                    <Progress
                        type="circle"
                        percent={80}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>CSS</h2>
                    <Progress
                        type="circle"
                        percent={75}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>TAILWIND CSS</h2>
                    <Progress
                        type="circle"
                        percent={70}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>JAVASCRIPT</h2>
                    <Progress
                        type="circle"
                        percent={65}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>REACT</h2>
                    <Progress
                        type="circle"
                        percent={75}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>FIREBASE</h2>
                    <Progress
                        type="circle"
                        percent={70}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>MONGODB</h2>
                    <Progress
                        type="circle"
                        percent={50}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>EXPRESS JS</h2>
                    <Progress
                        type="circle"
                        percent={45}
                    />
                </div>
                <div className='flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-3xl font-bold'>NODE JS</h2>
                    <Progress
                        type="circle"
                        percent={40}
                    />
                </div>

            </section>
        </div>
    );
};

export default MySkill;