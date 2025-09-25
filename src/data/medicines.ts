export interface Medicine {
  id: number;
  name: string;
  category: string;
  // price: number;
  description: string;
  image: string;
  rating: number;
  manufacturer: string;
  dosage: string;
  inStock: boolean;
}

export const medicines: Medicine[] = [
  {
    id: 1,
    name: "Marctan-H40",
    category: "",
    // price: 159,
    description: "Marctan-H40 Tablets help manage high blood pressure by combining Telmisartan and Hydrochlorothiazide to protect heart, and overall cardiovascular health..",
    image: "/medicine/marctan.png",
    rating: 4.5,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "",
    inStock: true
  },
  {
    id: 2,
    name: "Montomarc-L",
    category: "",
    // price: 101,
    description: "Montomarc-L Tablets provide effective relief from asthma, allergies, sneezing, runny nose, and breathing difficulties by combining Montelukast and Levocetirizine for dual respiratory care.",
    image: "/medicine/montomarc.png",
    rating: 4.7,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "",
    inStock: true
  },
  {
    id: 3,
    name: "Panmarc-DSR",
    category: "",
    // price: 110,
    description: "Panmarc-DSR Capsules provide effective relief from acidity, heartburn, acid reflux, and gastric discomfort by combining Pantoprazole and Domperidone for dual digestive care..",
    image: "/medicine/panmarc.png",
    rating: 4.3,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "",
    inStock: true
  },
  {
    id: 4,
    name: "Ostheocalvit-Plus",
    category: "",
    // price: 265,
    description: "Ostheocalvit-Plus Tablets support strong bones, joint health, and faster fracture healing with the power of Cissus Quadrangularis, Calcium, Vitamin K2-7, and Vitamin D3.",
    image: "/medicine/ostheocalvit.png",
    rating: 4.4,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "10mg tablets",
    inStock: true
  },
  {
    id: 5,
    name: "Premarc-NT",
    category: "",
    // price: 180,
    description: "Premarc-NT Tablets (Nortriptyline, Methylcobalamin & Pregabalin SR) provide effective relief from neuropathic pain while supporting nerve repair and regeneration.",
    image: "/medicine/premarc.png",
    rating: 4.6,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "",
    inStock: true
  },
  {
    id: 6,
    name: "Admarc-SP",
    category: "",
    // price: 110,
    description: "Admarc-SP Tablets (Aceclofenac, Paracetamol & Serratiopeptidase) give fast relief from pain, inflammation, and swelling for quick recovery..",
    image: "/medicine/admarc.png",
    rating: 4.2,
    manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    dosage: "400mg tablets",
    inStock: true
  },
  // {
    // id: 7,
    // name: "Multivitamin Complex",
    // category: "Vitamins",
    // price: 250,
    // description: "Complete multivitamin and mineral supplement for daily nutritional support.",
    // image: "https://images.pexels.com/photos/3652888/pexels-photo-3652888.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.8,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "Daily capsules",
    // inStock: true
  // },
  // {
    // id: 8,
    // name: "Azithromycin 500mg",
    // category: "Antibiotics",
    // price: 320,
    // description: "Macrolide antibiotic for respiratory tract infections. Prescription required.",
    // image: "https://images.pexels.com/photos/3683077/pexels-photo-3683077.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.5,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "500mg tablets",
    // inStock: true
  // },
  // {
    // id: 9,
    // name: "Cough Syrup",
    // category: "Cold & Flu",
    // price: 85,
    // description: "Herbal cough syrup for dry and wet cough relief. Suitable for all ages.",
    // image: "https://images.pexels.com/photos/3652881/pexels-photo-3652881.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.1,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "100ml bottle",
    // inStock: true
  // },
  // {
    // id: 10,
    // name: "Probiotics Capsules",
    // category: "Digestive",
    // price: 175,
    // description: "Live beneficial bacteria to support digestive health and gut microbiome.",
    // image: "https://images.pexels.com/photos/3652901/pexels-photo-3652901.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.7,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "Capsules",
    // inStock: true
  // },
  // {
    // id: 11,
    // name: "Calcium + D3",
    // category: "Vitamins",
    // price: 140,
    // description: "Calcium carbonate with vitamin D3 for bone health and strength.",
    // image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.4,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "Tablets",
    // inStock: true
  // },
  // {
    // id: 12,
    // name: "Aspirin 75mg",
    // category: "Pain Relief",
    // price: 35,
    // description: "Low-dose aspirin for cardiovascular protection and mild pain relief.",
    // image: "https://images.pexels.com/photos/3652892/pexels-photo-3652892.jpeg?auto=compress&cs=tinysrgb&w=400",
    // rating: 4.3,
    // manufacturer: "MarcGlen Pharmaceutical Pvt. Ltd.",
    // dosage: "75mg tablets",
    // inStock: true
  // }
];