// JobCard.js
import React from 'react';
import './JobCard.css';
import Page from './Page';
const jobData = [
  {
    company: "WeMakeScholars",
    jobRole: "Financial Loan Operator",
    location: "Chennai, TN",
    salary: "₹ Earnings discussed during interview",
    jobType: "Full-time",
    postedDate: "2 days",
  },
  {
    company: "Stockarea",
    jobRole: " Back-end Developer",
    location: "Bangalore",
    salary: "₹ Pay to be determined later",
    jobType: "Full-time",
    postedDate: "2 days",
  },
  {
    company: "Stockarea",
    jobRole: "front-end Developer",
    location: "Chennai, TN",
    salary: "₹ Pay to be determined later",
    jobType: "Full-time",
    postedDate: "1 days",
  },
  {
    company: "Stockarea",
    jobRole: "Laravel Back-end Developer",
    location: "Chennai, TN",
    salary: "₹ Pay to be determined later",
    jobType: "part-time",
    postedDate: "10 days",
  },
  {
    company: "Nepali Language Expert",
    jobRole: "Laravel Back-end Developer",
    location: "Bangalore, KN",
    salary: "₹ Pay to be determined later",
    jobType: "Full-time",
    postedDate: "5 days",
  },
  // Add the remaining job listings here
];

const JobCard = () => {
  return (
    <>
    <div className="job-card-container">
      {jobData.map((job, index) => (
        <div className="job-card" key={index}>
          <div className="job-info">
            <h2>{job.company}</h2>
            <p><strong>Job Role:</strong> {job.jobRole}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>{job.jobType}</strong></p>
            <p><em>Posted {job.postedDate} ago</em></p>
          </div>
          <button className="view-more-btn">View More</button>
        </div>
        
      ))}
       <Page/>
    </div>
  
   </>
  );
};

export default JobCard;
