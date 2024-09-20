import React, { useState } from "react";
import "./Main1.css"; // Add your styling here

const Main1 = () => {
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");

  const handleFilter = () => {
    // Add your filter logic here
    console.log({ jobRole, skills, location, salary, experience });
  };

  return (
    <div className="job-filter-card">
      <h3>Job Filter</h3>
      
      <label>
        Job Role:
        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          placeholder="e.g., Software Engineer"
        />
      </label>

      <label>
        Skills:
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="e.g., Java, Python, HTML"
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g., Chennai"
        />
      </label>

      <label>
        Salary:
        <select value={salary} onChange={(e) => setSalary(e.target.value)}>
          <option value="">Select Package</option>
          <option value="0-5 LPA">0-5 LPA</option>
          <option value="5-10 LPA">5-10 LPA</option>
          <option value="10-15 LPA">10-15 LPA</option>
          <option value="15-20 LPA">15-20 LPA</option>
          <option value="20-25 LPA">20-25 LPA</option>
          <option value="25-30 LPA">25-30 LPA</option>
          <option value="30-35 LPA">30-35 LPA</option>
          <option value="35-40 LPA">35-40 LPA</option>
          <option value="40+ LPA">40+ LPA</option>
        </select>
      </label>

      <label>
        Experience:
        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="">Select Experience</option>
          <option value="0-1 years">0-1 years</option>
          <option value="1-2 years">1-2 years</option>
          <option value="2-3 years">2-3 years</option>
          <option value="3-4 years">3-4 years</option>
          <option value="4-5 years">4-5 years</option>
          <option value="5-6 years">5-6 years</option>
          <option value="6-7 years">6-7 years</option>
          <option value="7-8 years">7-8 years</option>
          <option value="8+ years">8+ years</option>
        </select>
      </label>

      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Main1;
