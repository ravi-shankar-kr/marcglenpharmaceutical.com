import React from 'react';
import { Shield, Award, Heart, Users, Target, Eye } from 'lucide-react';
import Team from '../landing_page/Team';

function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We ensure every product meets the highest pharmaceutical standards'
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Your health and wellbeing are at the center of everything we do'
    },
    {
      icon: Users,
      title: 'Community Service',
      description: 'Dedicated to serving the healthcare needs of Sitamarhi and surrounding areas'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to excellence in pharmaceutical products and services'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years of Service' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '30+', label: 'Medicine Varieties' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">MarcGlen Pharmaceutical Pvt. Ltd.</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A trusted name in pharmaceutical excellence, serving the community of 
          Sitamarhi, Bihar with dedication and integrity.
        </p>
      </div>

      {/* Company Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2023, MarcGlen Pharmaceutical Pvt. Ltd. began with a simple yet 
              powerful vision: to provide reliable, affordable, and high-quality medicines 
              to the people of India.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small pharmacy has grown into a trusted pharmaceutical 
              company, serving thousands of customers across India. Our commitment to 
              quality, service, and community welfare has remained unwavering throughout 
              our journey.
            </p>
            <p className="text-gray-600">
              Today, we continue to uphold the values that founded our company: 
              integrity, quality, and genuine care for our customers' health and wellbeing.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pharmacy interior"
              className="rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg">
              <p className="text-sm font-semibold">Serving India since 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide accessible, affordable, and high-quality pharmaceutical 
              products while ensuring exceptional customer service and contributing 
              to the health and wellness of our community.
            </p>
          </div>
          <div className="text-center">
            <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted pharmaceutical company in Sitamarhi, known for 
              our commitment to quality, innovation, and community health, while 
              expanding our reach to serve more communities across India.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16 bg-gray-900 text-white rounded-2xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-300">Numbers that reflect our commitment</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Factors */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Trust MarcGlen?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Certified</h3>
            <p className="text-gray-600">
              Fully licensed pharmaceutical business with all necessary certifications 
              and regulatory compliance.
            </p>
          </div>
          <div className="p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              All products sourced from reputable manufacturers with strict quality 
              control measures in place.
            </p>
          </div>
          <div className="p-6">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Our qualified pharmacists provide professional advice and guidance 
              for all your medication needs.
            </p>
          </div>
        </div>
      </section>
      {/* <Team/> */}
    </div>
  );
}

export default About;