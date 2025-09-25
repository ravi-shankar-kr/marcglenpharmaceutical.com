import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';
import { medicines } from '../data/medicines';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

  const categories = ['All', 'Pain Relief', 'Antibiotics', 'Vitamins', 'Cold & Flu', 'Digestive'];

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (medicineId: number) => {
    setCartItems(prev => ({
      ...prev,
      [medicineId]: (prev[medicineId] || 0) + 1
    }));
  };

  const getCartQuantity = (medicineId: number) => cartItems[medicineId] || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600">
          Quality medicines for your health and wellness needs
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Filter className="h-5 w-5 text-gray-600" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMedicines.map((medicine) => (
          <div key={medicine.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
            <img
              src={medicine.image}
              alt={medicine.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <div className="mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {medicine.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{medicine.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{medicine.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                {/* <span className="text-2xl font-bold text-green-600">₹{medicine.price}</span> */}
                <div className="flex items-center space-x-1">
                  {/* <Star className="h-4 w-4 text-yellow-400 fill-current" /> */}
                  {/* <span className="text-sm text-gray-600">{medicine.rating}</span> */}
                </div>
              </div>

             {/* <button
                onClick={() => addToCart(medicine.id)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
                {getCartQuantity(medicine.id) > 0 && (
                  <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-sm">
                    {getCartQuantity(medicine.id)}
                  </span>
                )}
              </button>  */}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-full mx-auto my-10">
      {/* Disclaimer container */}
      <div
        role="note"
        aria-label="Important Disclaimer"
        className="border border-gray-300 rounded-lg bg-white shadow-lg p-4 text-sm text-gray-700 text-center"
      >
        <strong className="block mb-2 text-3xl text-red-600">Disclaimer</strong>
        <p className='text-sm p-4'>
          If this medicine is used without a valid prescription, is sold at a price
          higher than the stated MRP, or is dispensed without a prescription, we
          shall not be held responsible for any adverse outcomes, misuse, or financial
          loss. Please consult a licensed healthcare professional and purchase medicines
          only from authorized vendors at or below the MRP.
        </p>
      </div>
    </div>

      {filteredMedicines.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No medicines found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Products;