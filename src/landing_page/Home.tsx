import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Clock, ArrowRight, Star } from 'lucide-react';
import { medicines } from '../data/medicines';
import ContactForm from './ContactForm';

function Home() {
  const featuredMedicines = medicines.slice(0, 6);

  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All medicines are sourced from certified manufacturers'
    },
    {
      icon: Award,
      title: 'Licensed Pharmacy',
      description: 'Fully licensed and regulated pharmaceutical business'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced pharmacists and healthcare professionals'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock availability for emergency medicines'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MarcGlen Pharmaceutical
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Your Trusted Healthcare Partner
            </p>
            <p className="text-lg mb-8 text-blue-100 max-w-3xl mx-auto">
              Serving Sitamarhi, Bihar with quality medicines and pharmaceutical 
              products. Your health is our commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MarcGlen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality pharmaceutical 
              products and services to our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Medicines
            </h2>
            <p className="text-xl text-gray-600">
              Popular and trusted pharmaceutical products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMedicines.map((medicine) => (
              <div key={medicine.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <img
                  src={medicine.image}
                  alt={medicine.name}
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{medicine.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{medicine.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-2xl font-bold text-green-600">₹{medicine.price}</span> */}
                    <div className="flex items-center space-x-1">
                      {/* <Star className="h-4 w-4 text-yellow-400 fill-current" /> */}
                      {/* <span className="text-sm text-gray-600">{medicine.rating}</span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Medical Assistance?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Our experienced pharmacists are here to help you with your healthcare needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* <ContactForm/> */}
    </div>
  );
}

export default Home;