import React, { useEffect, useState } from 'react';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      const storedJobs = localStorage.getItem('jobs');
      if (storedJobs) {
        const parsedJobs = JSON.parse(storedJobs);
        if (Array.isArray(parsedJobs)) {
          setJobs(parsedJobs);
        } else {
          console.error("Stored jobs is not an array.");
          setJobs([]);
        }
      }
    } catch (err) {
      console.error("Invalid JSON in localStorage for 'jobs':", err);
      setJobs([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Jobs</h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.company}</p>
              <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.location}</p>
              <p className="text-gray-600 mb-1"><strong>Salary:</strong> {job.salary}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
