import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './styles.css';

function DogDetails() {
  const { dogId } = useParams();
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.jsonbin.io/v3/b/651fbed554105e766fbe7faa");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const selectedDog = data.record[parseInt(dogId, 10)];
        setDog(selectedDog);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [dogId]);

  return (
    <div className="dog-details-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {dog && (
        <>
          <div className="name-row">
            <h2>{dog.name}</h2>
          </div>
          <div className="photo-button-container">
            <img src={dog.img} alt={dog.name} className="dog-image" />
            <Link to="/catalog" className="back-button-link"> 
              <button className="button">View Our Dogs</button>
            </Link>
          </div>
          <div className="details-row">
            <div className="dog-info">
              <p><strong>Breed:</strong> {dog.breed}</p>
              <p><strong>Sex:</strong> {dog.sex}</p>
              <p><strong>Age:</strong> {dog.age}</p>
              <p><strong>Chip Number:</strong> {dog.chipNumber}</p>
              <p><strong>Present:</strong> {dog.present ? "Yes" : "No"}</p>
            </div>
            <div className="owner-info">
              <h3>Owner Details</h3>
              <p><strong>Name:</strong> {dog.owner.name}</p>
              <p><strong>Last Name:</strong> {dog.owner.lastName}</p>
              <p><strong>Phone Number:</strong> {dog.owner.phoneNumber}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DogDetails;
