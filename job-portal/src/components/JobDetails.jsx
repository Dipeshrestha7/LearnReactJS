import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    try {
      const jobsData = JSON.parse(localStorage.getItem('jobs')) || [];
      const selectedJob = jobsData.find((j) => j.id === Number(id));
      setJob(selectedJob);
    } catch (err) {
      console.error('Failed to load job:', err);
    }
  }, [id]);

  if (!job) {
    return <div className="text-center p-10">Job not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold mb-4">{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p className="mt-4"><strong>Description:</strong></p>
        <p>{job.description}</p>
      </div>
    </div>
  );
}

export default JobDetails;
