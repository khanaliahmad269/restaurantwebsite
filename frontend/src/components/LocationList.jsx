import React from 'react';

const LocationList = ({ locations }) => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Our Locations</h2>
      <div className="flex justify-center flex-wrap mt-6">
        {locations.map(location => (
          <div key={location.id} className="max-w-xs mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-bold">{location.name}</h3>
              <p className="mt-2 text-gray-600">{location.address}</p>
              <p className="mt-2 text-gray-600">{location.city}, {location.state} {location.zip_code}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationList;