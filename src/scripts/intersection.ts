interface BusinessPartner {
    name: string;
}

interface ContactDetail {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & ContactDetail

const contact: BusinessContact = {
    name: "thu hang",
    email: "thuhang@gmail.com",
    phone: "12345566",
}