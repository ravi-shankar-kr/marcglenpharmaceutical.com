import React from 'react';

// TypeScript के लिए हम कंपोनेंट को React.FC (Functional Component) के रूप में टाइप कर सकते हैं।
const LocationMap: React.FC = () => {
  return (
    // Google Maps Section
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?q=H.n-21%20Vill-kapraul,%20Sirmon%20First%20Block%20Riga,%20Sirauli,%20Sitamarhi,%20Dumra,%20Bihar,%20India,%20843302&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true} // In TSX, it's better to use boolean true
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;