import { useEffect, useState } from "react";
import Featuredjod from "../Featuredjod/Featuredjod";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    return (
        <div className="max-w-7xl  mx-auto  my-10">
            <h1 className="text-5xl font-extrabold  text-center">Featured Jobs</h1>
            <p className="text-[#757575] text-center font-semibold my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 mt-10 mx-auto gap-10">
                {
                    featuredJobs.slice(0, dataLength).map(featuredJob => <Featuredjod key={featuredJob.id} featuredJob={featuredJob}></Featuredjod>)
                }
            </div>
            <div className={dataLength === featuredJobs.length && 'hidden'}>
                <button onClick={() => setDataLength(featuredJobs.length)} className="btn mt-4 flex mx-auto btn-outline btn-accent">View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;