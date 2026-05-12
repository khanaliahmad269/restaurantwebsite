import React from 'react';

const MenuList = ({ menuItems }) => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center">Our Menu</h2>
      <div className="flex justify-center flex-wrap mt-6">
        {menuItems.map(item => (
          <div key={item.id} className="max-w-xs mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={item.image_url} alt={item.name} />
            <div className="p-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <p className="mt-2 text-red-600 font-bold">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuList;