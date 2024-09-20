import React from 'react'
import Main from './Main';
import Main1 from './Main1';
import SearchBar from './SearchBar';
import JobCard from './JobCard';


//import { FaSearch } from "react-icons/fa";
const Job = () => {
    const handleSearch = (query) => {
        console.log("Search in AnotherComponent:", query);
        // Add your specific search logic here
      };
    
  return (

    <div>
          
         <Main />
         <SearchBar onSearch={handleSearch} />
         <div style={{display:"flex"}}>
         <Main1/>
         <JobCard />
         </div>
         
        
       
    </div>
  )
}

export default Job;
{/*



    const handleSearch = ({onSearch }) => {
        if (onSearch) {
          onSearch();
        }
              <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div> */}