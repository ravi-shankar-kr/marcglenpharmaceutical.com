import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team. We're here to help with all your pharmaceutical needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
         
         
      <ContactForm/>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">
                  H.n-21 Vill-kapraul, Sirmon First Block Riga, Sirauli, Sitamarhi, Dumra, Bihar, India, 843302.
                     
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8521691174</p>
                  <p className="text-gray-600">+91 6200783623</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">marcglenpharmaceuiticalpvtltd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Business Hours</p>
                  <p className="text-gray-600">Mon - Sat: 8:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                  <p className="text-sm text-green-600 font-medium">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="mb-6 text-blue-100">
              Stay connected for health tips, product updates, and company news.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28849.98959655477!2d85.49833!3d26.5986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10d1ab2a5d33%3A0x3bc6b1b4e9b0b7d8!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MarcGlen Pharmaceutical Location"
          />
        </div>
      </div>
      {/* <LocationMap/> */}
    </div>
  );
}

export default Contact;