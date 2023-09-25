import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../utilites/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
import { BsChevronDown } from "react-icons/bs";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobs = getStoredData();

        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobs.includes(job.id));
            setAppliedJobs(jobsApplied)
        }
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-10">

            <div>
                {
                    appliedJobs.map(appliedJob => <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;