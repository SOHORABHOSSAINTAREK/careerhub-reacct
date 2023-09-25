const getStoredData = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);

    }
    else {
        return [];
    }
}

const saveStoredData = (id) => {
    const jobApplications = getStoredData();
    const exists = jobApplications.find(jobId => jobId === id);
    if (!exists) {
        jobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(jobApplications));
    }

}
export { getStoredData, saveStoredData }
