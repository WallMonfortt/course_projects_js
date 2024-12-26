import React, { useState, useEffect } from 'react';
import { fetchElasticCars } from '../utils/api';

const ElasticCarList = () => {
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    try {
      const fetchedcars = await fetchElasticCars();
      setCars(fetchedcars);
      console.log('Cars fetched:', fetchedcars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Elastic Cars List</h2>
      <div className="row">
        {cars.length > 0 && cars.map(car => (
          <div key={car.id} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <pre className="bg-light p-3">
                  ID: {car.id} {'\n'}
                  Name: {car.name} {'\n'}
                  Version: {car.version} {'\n'}
                  Model: {car.model} {'\n'}
                  Brand: {car.brand} {'\n'}
                  Visible: {car.visible ? 'Yes' : 'No'}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElasticCarList;
