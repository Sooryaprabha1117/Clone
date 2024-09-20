import React, { useState } from 'react';
import './FaqData.css'; // Import the CSS for styling

const faq = [
  {
    question: 'What is Thozhil and how does it work?',
    answer: 'Thozhil is a platform that connects job seekers with internships and job opportunities by matching their skills and interests with available positions.',
  },
  {
    question: 'What types of internships and jobs are available on Thozhil?',
    answer: 'Thozhil offers various types of internships and jobs, including full-time, part-time, and remote positions across multiple industries.',
  },
  {
    question: 'How can I sign up for an account on Thozhil?',
    answer: 'You can sign up for an account on Thozhil by clicking the "Sign Up" button on the homepage and filling out the required details.',
  },
  {
    question: 'Is Thozhil suitable for both internships and full-time positions?',
    answer: 'Yes, Thozhil is suitable for both internships and full-time positions, catering to a wide range of job seekers.',
  },
  {
    question: 'Is there a deadline for internship applications?',
    answer: 'Each internship may have a specific deadline, which will be mentioned in the job description. It is advisable to apply as early as possible.',
  },
  {
    question: 'How does Thozhil match candidates with suitable opportunities?',
    answer: 'Thozhil uses an advanced algorithm to match candidates with suitable job opportunities based on their skills, experience, and preferences.',
  },
  {
    question: 'Are there any fees associated with using Thozhil?',
    answer: 'Thozhil is free to use for job seekers. Employers may be charged for posting job listings or accessing additional features.',
  },
  {
    question: 'How does the application process work on Thozhil?',
    answer: 'Candidates can apply directly to the job postings on Thozhil by clicking the "Apply" button and submitting their resume and other required information.',
  },
  {
    question: 'How does Thozhil ensure the quality and legitimacy of job postings?',
    answer: 'Thozhil verifies job postings and employers to ensure that the opportunities listed are legitimate and meet quality standards.',
  },
  {
    question: 'How does Thozhil ensure a user-friendly experience for both candidates and employers?',
    answer: 'Thozhil provides a seamless and user-friendly platform with easy navigation, advanced search filters, and personalized job recommendations.',
  },
  {
    question: 'Join our mailing list to receive updates!',
    answer: 'Sign up for our newsletter to stay updated with the latest job opportunities and platform updates from Thozhil.',
  },
];

function FaqData() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the answer visibility
  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2> {/* Heading for the FAQ section */}
      {faq.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleToggle(index)}
        >
          <h3 className="faq-question">{item.question}</h3>
          {activeIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqData;
