import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategories = () => {
    const [jobCategories, setJobCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])
    return (

        <div className="my-10">
            <h1 className="text-center  text-5xl font-extrabold">Job Category List</h1>
            <p className="py-5 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="max-w-7xl flex mx-auto justify-around gap-5">
                {
                    jobCategories.map(jobCategory => <JobCategory key={jobCategory.id} jobCategory={jobCategory}></JobCategory>)
                }
            </div>

        </div>
    );
};

export default JobCategories;