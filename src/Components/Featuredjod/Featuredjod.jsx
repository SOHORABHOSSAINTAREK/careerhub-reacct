import { CiLocationOn, CiDollar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const Featuredjod = ({ featuredJob }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = featuredJob;
    return (
        <div className="mx-auto">
            <img className="mb-8 max-w-52" src={logo} alt="" />
            <h1 className="text-2xl font-extrabold">{job_title}</h1>
            <h3 className="text[#757575] my-3 text-xl font-medium">{company_name}</h3>
            <div className="flex gap-2">
                <button className="btn btn-outline btn-info">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-info">{job_type}</button>
            </div>
            <div className="flex  my-3 gap-8">
                <h2 className="flex gap-1"><CiLocationOn className="text-xl"></CiLocationOn> {location}</h2>
                <h2 className="flex gap-1"><CiDollar className="text-xl"></CiDollar> {salary}</h2>
            </div>
            <NavLink to={`/job/${id}`}><button className="btn mt-4 btn-outline btn-accent">View Details</button></NavLink>
        </div>
    );
};

export default Featuredjod;