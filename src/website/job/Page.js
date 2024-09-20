import React from 'react';
import Pagination from './Pagination'; // Adjust the path as necessary

const Page = () => {
  return (
    <div>
      
      <Pagination totalPages={6} /> {/* Pass the total number of pages */}
    </div>
  );
};

export default Page;
