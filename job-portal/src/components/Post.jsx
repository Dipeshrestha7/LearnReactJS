import React, { useState } from 'react';

function Post() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];

      const newJob = {
        ...job,
        id: Date.now(),
      };
      localStorage.removeItem("jobs");

      const updatedJobs = [...existingJobs, newJob];

      localStorage.setItem('jobs', JSON.stringify(updatedJobs));

      alert('Job posted successfully!');

      setJob({
        title: '',
        company: '',
        location: '',
        salary: '',
        description: ''
      });
    } catch (error) {
      alert('Failed to save job. Try again.');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Post a Job</h2>

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleInput}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={job.company}
          onChange={handleInput}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleInput}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleInput}
          className="border w-full px-3 py-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleInput}
          className="border w-full px-3 py-2 rounded"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default Post;
