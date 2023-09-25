
const JobCategory = ({ jobCategory }) => {
    const { logo, category_name, availability } = jobCategory;
    return (
        <div className="bg-blue-100 rounded-lg p-5">
            <img className="mx-auto" src={logo} alt="" />
            <h1 className="text-2xl font-extrabold">{category_name}</h1>
            <h2 className="text-[#A3A3A3] font-semibold">{availability}</h2>
        </div>
    );
};

export default JobCategory;