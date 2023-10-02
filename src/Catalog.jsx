import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function Catalog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683');
        const data = await response.json();
        setDogs(data.record);
      } catch (error) {
        console.error("Error fetching dogs:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="catalog-container">
      <h1>OUR DOGS</h1>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <Link to={`/dog/${index}`}>{dog.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
