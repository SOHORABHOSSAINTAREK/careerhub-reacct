import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiDollar, CiLaptop, CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import { saveStoredData } from "../../utilites/LocalStorage";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    const handleApply = () => {
        saveStoredData(idInt);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-32 bg-blue-100 text-[#1A1919]">Job Details</h1>
            <div className="max-w-7xl mx-auto my-32  grid grid-cols-4">
                <div className="col-span-3 space-y-4">
                    <h1 className="text-[#757575] font-semibold"><span className="font-bold text-black">Job Description:  </span>{job_description}</h1>
                    <h1 className="text-[#757575] font-semibold"><span className="font-bold text-black ">Job Responsibility:  </span>{job_responsibility}</h1>
                    <h1 className="text-[#757575] font-semibold"><span className="font-bold text-black">Educational Requirements:  </span></h1>
                    <p className="text-[#757575] font-semibold">{educational_requirements}</p>
                    <h1 className="font-bold">Experiences:  </h1>
                    <p className="text-[#757575] font-semibold">{experiences}</p>
                </div>
                <div className="col-span-1 p-4 rounded-lg bg-blue-100">
                    <div>
                        <h1 className="text-xl border-b-2 border-blue-300 text-center py-4 font-bold">Job Details</h1>
                        <h1 className="flex items-center my-2 mt-4 gap-2"><CiDollar className="text-xl text-green-400"></CiDollar><span className="font-bold">Salary:</span> {salary}</h1>
                        <h1 className="flex border-b-2 pb-4 border-blue-300 items-center my-2 gap-2"><CiLaptop className="text-xl text-green-400"></CiLaptop><span className="font-bold">Job Title:</span> {job_title}</h1>
                        <h1 className="flex items-center my-2 mt-4 gap-2"><CiPhone className="text-xl text-green-400"></CiPhone><span className="font-bold">Phone:</span> {contact_information.phone}</h1>
                        <h1 className="flex items-center my-2 mt-4 gap-2"><CiMail className="text-xl text-green-400"></CiMail><span className="font-bold">Email:</span> {contact_information.email}</h1>
                        <h1 className="flex my-2 mt-4 gap-2"><CiLocationOn className="text-3xl text-green-400"></CiLocationOn><span className="font-bold">Address:</span> {contact_information.address}</h1>
                        <button onClick={handleApply} className="btn mt-4 flex mx-auto btn-outline btn-accent">Apply Now</button>
                    </div>
                </div>
            </div>
            <Link to='/'><button className="btn my-6 flex mx-auto btn-outline btn-accent">Back To Home</button></Link>

        </div>
    );
};

export default JobDetails;