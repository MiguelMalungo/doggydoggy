import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Catalog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/651fbed554105e766fbe7faa');
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
            <Link to={`/dog/${index}`} className="dog-link">
              <img src={dog.img} alt={dog.name} className="dog-thumbnail" />
              <p>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;
