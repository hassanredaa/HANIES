
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

export function get(){
    return test
}

export function set(x) {
    test = x
}

export function addUser (name,password,email) {
    users.push({name,password,email})
    console.log(users)
}

export function getUser () {
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

export var orgs=[
    {
        name: 'Sarah',
        organizationName: 'Masr Kheir',
        organizationType: 'Profit',
        gender: 'Female',
        email: 'sarah@example.com',
        phone: '0103333333333',
        address: 'Giza'
    },
    {
        name: 'Ahmed',
        organizationName: 'Red Crescent Society',
        organizationType: 'Non-Profit',
        gender: 'Male',
        email: 'ahmed@example.com',
        phone: '0104444444444',
        address: 'Dokki'
    },
    {
        name: 'Lina',
        organizationName: 'Hope Foundation',
        organizationType: 'Non-Profit',
        gender: 'Female',
        email: 'lina@example.com',
        phone: '0105555555555',
        address: 'Maadi'
    },
    {
        name: 'Omar',
        organizationName: 'Global Health Initiative',
        organizationType: 'Non-Profit',
        gender: 'Male',
        email: 'omar@example.com',
        phone: '0106666666666',
        address: 'Zamalek'
    }
    // Add more entries as needed
];



export var organizations = [
    {
        name: "Charity1",
        password: "test123",
        email: "charity1@goodgiving.com"
    },
    {
        name: "Charity2",
        password: "test123",
        email: "charity2@goodgiving.com"
    }
]

export var submissionsData = [
    { id: 1, name: 'Organization A', status: 'Pending' },
    { id: 2, name: 'Organization B', status: 'Approved' },
    { id: 3, name: 'Organization C', status: 'Rejected' },
];


export var submissionsDonData = [
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Reviewed' },
    { id: 3, name: 'Alice Johnson', status: 'Approved' },
    { id: 4, name: 'Bob Brown', status: 'Denied' }
];

