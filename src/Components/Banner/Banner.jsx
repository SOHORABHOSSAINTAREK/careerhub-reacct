import user from './../../assets/images/user.png'
const Banner = () => {
    return (
        <div>
            <div className="hero   bg-blue-100">
                <div className="hero-content  flex-col  lg:flex-row-reverse">
                    <div className=' w-[600px] mb-0 pb-0'>
                        <img src={user} className="w-fit pb-0 mb-0 rounded-lg " />
                    </div>
                    <div>
                        <h1 className="text-5xl  font-bold">One Step <br />
                            Closer To Your
                            <br />
                            <span className='text-[#7E90FE] '>Dream Job</span></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it.<br />  Manage all your job application from start to finish.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none font-bold text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;