
export const about = [
  {
    title: "About Us",
    description: "Welcome to Good Giving, a dedicated hub for compassionate giving.At Good Giving, we believe that generosity has the power to unite communities and transform lives. Our platform empowers individuals and organizations to donate non-monetary items such as clothes, medical supplies, school supplies, furniture, and toys to those who need them most. We bridge the gap between donors and recipients, ensuring that your contributions make the most significant impact."
  },
  {
    title: "Our Mission",
    description: "Our mission is to facilitate effective giving that addresses critical needs across various sectors without the exchange of money. By focusing on tangible donations, we ensure that the right resources reach the right hands at the right time. Whether it’s providing a warm coat to a refugee, supplying a student with necessary school materials, or equipping a family with essential household appliances, your donations directly improve lives."
  },
  {
    title: "How It Works",
    description: "Discover Needs: Users can browse through detailed listings of current cases, each categorized by urgency and specific needs—from educational materials for underprivileged schools to medical equipment for local clinics. Donate Easily: Once you find a match for your available items, a simple request process connects your donation with the recipient. You can choose to donate to families, educational institutions, healthcare facilities, or charitable organizations. Seamless Logistics: We coordinate the pickup and delivery of donated items. Our platform schedules a pickup at your convenience, and our trusted logistics partners ensure safe and timely delivery to the recipient. Track Impact: Stay updated with real-time tracking of your donations from pickup to delivery. We provide notifications and reports so you can see the tangible impact of your generosity. Our Vision We envision a world where giving is a seamless part of everyday life. Good Giving strives to create a sustainable impact by enabling people and organizations to help each other in meaningful ways. Our platform is more than just a bridge between supply and need; it’s a community builder that fosters a culture of support and solidarity."
  },
  {
    title: "Join Us",
    description: "Whether you are an individual looking to give back, a company wishing to contribute resources, or a non-profit in need of supplies, Aid Avenue is your partner in making a difference. Join us in our mission to transform lives through the power of giving."
  }
]

export var test = 'This is a test'

export function get() {
  return test
}

export function set(x) {
  test = x
}

export function addUser(name, password, email) {
  users.push({ name, password, email })
  console.log(users)
}

export function getUser() {
  console.log(users)
}

export var users = [
  {
    name: "Amira",
    password: "test123",
    email: "amira@goodgiving.com"
  },
  {
    name: "Hassan",
    password: "test123",
    email: "hassan@goodgiving.com"
  }
]

export var doctec = [
  {
    name: 'Hussein',
    gender: 'Male',
    type: 'Doctor',
    email: 'hussein@example.com',
    phone: '0100000000000',
    address: 'New Cairo'
  },
  {
    name: 'Aisha',
    gender: 'Female',
    type: 'Doctor',
    email: 'aisha@example.com',
    phone: '0101111111111',
    address: 'Maadi'
  },
  {
    name: 'John',
    gender: 'Male',
    type: 'Teacher',
    email: 'john@example.com',
    phone: '0102222222222',
    address: 'Downtown'
  },
  {
    name: 'Sarah',
    gender: 'Female',
    type: 'Teacher',
    email: 'sarah@example.com',
    phone: '0103333333333',
    address: 'Giza'
  }
];

export var orgs = [
  {
    name: 'Sarah',
    organizationName: 'Masr Kheir',
    organizationType: 'Profit',
    gender: 'Female',
    email: 'sarah@example.com',
    phone: '0103333333333',
    area: 'Giza',
    governorate: 'Cairo'
  },
  {
    name: 'Ahmed',
    organizationName: 'Red Crescent Society',
    organizationType: 'Non-Profit',
    gender: 'Male',
    email: 'ahmed@example.com',
    phone: '0104444444444',
    area: 'Dokki',
    governorate: 'Cairo'

  },
  {
    name: 'Lina',
    organizationName: 'Hope Foundation',
    organizationType: 'Non-Profit',
    gender: 'Female',
    email: 'lina@example.com',
    phone: '0105555555555',
    area: 'Maadi',
    governorate: 'Cairo'

  },
  {
    name: 'Omar',
    organizationName: 'Global Health Initiative',
    organizationType: 'Non-Profit',
    gender: 'Male',
    email: 'omar@example.com',
    phone: '0106666666666',
    area: 'Zamalek',
    governorate: 'Cairo'

  }
  // Add more entries as needed
];



export var organizations = [
  {
    name: "Baheya",
    password: "test123",
    email: "baheya@goodgiving.com"
  },
  {
    name: "Cairo Modern School",
    password: "cms123",
    email: "CMS@goodgiving.com"
  },
  {
    name: "Cairo English School",
    password: "ces123",
    email: "CES@goodgiving.com"
  },
  {
    name: "57357",
    password: "ch123",
    email: "CH@goodgiving.com"
  }

]

export var submissionsData = [
  { id: 1, name: 'Baheya', status: 'Pending' },
  { id: 2, name: 'Cairo Modern School', status: 'Approved' },
  { id: 3, name: 'Cairo English School', status: 'Rejected' },
  { id: 1, name: '57357', status: 'Pending' },

];


export var submissionsDonData = [
  { id: 1, name: 'Laila Youssef', status: 'Pending' },
  { id: 2, name: 'Hussien Ahmed ', status: 'Reviewed' },
  { id: 3, name: ' Ahmed Hassan', status: 'Approved' },
  { id: 4, name: 'Anthony Sameh', status: 'Denied' },
  { id: 4, name: 'Amira Sameh', status: 'Denied' },
  { id: 4, name: 'Youssef Nabil', status: 'Approved' },


];

export const donations = [
  { id: 1, name: 'Donation 1', category: 'clothes', age: 'adult', gender: 'male', season: 'winter', quantity: 10, type: 'Shirt', material: 'Cotton', donation: 'donation1' },
  { id: 2, name: 'Donation 2', category: 'toys', age: 'child', gender: 'unisex', toy_category: 'dolls', quantity: 5 },
  { id: 3, name: 'Donation 3', category: 'food', type: 'canned foods', item_name: 'foul medames', quantity: 20 },
  { id: 4, name: 'Donation 4', category: 'clothes', age: 'child', gender: 'female', season: 'summer', quantity: 15, type: 'Dress', material: 'Polyester' },
  { id: 5, name: 'Donation 5', category: 'toys', age: 'any', gender: 'unisex', toy_category: 'cars', quantity: 8 },
  { id: 6, name: 'Donation 6', category: 'school supplies', type: 'books', bookname: 'harry potter', author: 'jk rowling', language: 'english', edition: '2nd', summary: 'magic', quantity: 8 },
  { id: 7, name: 'Donation 7', category: 'school supplies', type: 'stationary', stationarytype: 'pencil', quantity: 8 },
  { id: 8, name: 'Donation 8', category: 'blood', name_of_patient: 'hanan el dreiny', type: 'O', hospital: 'el hayat', governorate: 'cairo', area: 'heliopolis', address: '4 el ghanam', quantity: 1 },
  { id: 9, name: 'Donation 9', category: 'medical', type: 'medication', medication_use: 'cardiac', quantity: 15 },
  { id: 10, name: 'Donation 10', category: 'medical', type: 'devices', device_type: 'MRI', quantity: 15 },
  { id: 11, name: 'Donation 11', category: 'medical', type: 'equipment', equipment_type: 'scalpel', quantity: 15 },
];

export const organizationRequests = {
  clothes: [
    {
      id: 1,
      category: "clothes",
      description: "Winter coats for children",
      age: "Child",
      gender: "Male",
      season: "Winter",
      type: "Coat",
      material: "Fabric",
      quantity: 100,
      contact: "example@email.com",
      source: "../assets/clothes.jpg",
      donation: "/products/clothes"

    },
    {
      id: 2,
      category: "clothes",
      description: "Women's shirts",
      age: "Adult",
      gender: "Female",
      season: "Summer",
      type: "Shirt",
      material: "Cotton",
      quantity: 50,
      contact: "example@email.com",
      source: "../assets/clothes.jpg",
      donation: "/products/Clothes2"
    },
    // Add more clothing requests as needed
  ],
  food: [
    {
      id: 1,
      category: "food",
      description: "Canned foods",
      type: "canned foods",
      item_name: "foul medames",
      quantity: "100 cans",
      contact: "example@email.com",
      donation: "/products/CannedFood"

    },
    {
      id: 2,
      category: "food",
      description: "Banana",
      type: "fruits and vegetables",
      item_name: "Banana",
      quantity: "50 kg",
      contact: "example@email.com",
      donation: "/products/HomemadeFood"

    },
    // Add more food requests as needed
  ],
  toys: [
    {
      id: 1,
      category: "toys",
      description: "Stuffed animals",
      age: "Child",
      gender: "Unisex",
      toy_category: "stuffed toys",
      quantity: 50,
      contact: "example@email.com",
      donation: "/products/Toys1"

    },
    {
      id: 2,
      category: "toys",
      description: "LEGO sets",
      age: "Teen",
      gender: "Unisex",
      toy_category: "board games",
      quantity: 30,
      contact: "example@email.com",
      donation: "/products/Toys2"

    },
    // Add more toy requests as needed
  ],
  schoolSupplies: [
    {
      id: 1,
      category: "schoolSupplies",
      description: "Notebooks",
      type: "Stationary",
      stationarytype: "notebooks",
      quantity: 200,
      contact: "example@email.com",
      donation: "/products/NoteBooks"
    },
    {
      id: 2,
      category: "schoolSupplies",
      description: "Harry Potter",
      type: "Books",
      bookname: "harry potter",
      author: "jk rowling",
      language: "english",
      edition: "2nd",
      summary: "magic",
      quantity: 500,
      contact: "example@email.com",
      donation: "/products/Books"


    },
    // Add more school supplies requests as needed
  ],

  medicalSupplies: [
    {
      id: 1,
      category: "medicalSupplies",
      description: "Panadol",
      type: "medication",
      medication_use: "pain relief",
      quantity: 200,
      contact: "example@email.com",
      donation: "/products/Medical"

    },
    {
      id: 2,
      category: "medicalSupplies",
      description: "MRI Scanner",
      type: "devices",
      device_type: "MRI",
      medication_use: "medical imaging procedure",
      quantity: 100,
      contact: "example@email.com",
      donation: "/products/Device"

    },
    {
      id: 3,
      category: "medicalSupplies",
      description: "Scalpel",
      type: "equipment",
      equipment_type: "scalpel",
      quantity: 100,
      contact: "example@email.com",
      donation: "/products/Equipment"

    },
    // Add more medical supplies requests as needed
  ],
  bloodDonations: [
    {
      id: 1,
      category: "bloodDonations",
      description: "Blood Type O",
      name_of_patient: "hanan el dreiny",
      type: "O",
      hospital: "el hayat",
      governorate: "cairo",
      area: "heliopolis",
      address: "4 el ghanam",
      quantity: 1,
      contact: "example@email.com",
      donation: "/products/Blood1"

    },
    {
      id: 2,
      category: "bloodDonations",
      description: "Blood Type A-",
      name_of_patient: "Youssef Khalil",
      type: "A-",
      hospital: "el hayat",
      governorate: "cairo",
      area: "heliopolis",
      address: "4 el ghanam",
      quantity: 1,

      contact: "example@email.com",
      donation: "/products/Blood2"

    },
    // Add more blood donation requests as needed
  ]
};