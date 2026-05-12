import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationList from '../components/LocationList';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('/api/locations')
      .then(response => setLocations(response.data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  return (
    <div>
      <LocationList locations={locations} />
    </div>
  );
};

export default LocationsPage;