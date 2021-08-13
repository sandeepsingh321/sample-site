const sample_results = [
    {
        id: "123",
        name: "A",
        address: "123-x Society Z, Mumbai",
        email: "123@host.com",
        phone: "+91 0000000123",
        country: "India",
    },
    {
        id: "124",
        name: "B",
        address: "124-A Society Z, Mumbai",
        email: "124@host.com",
        phone: "+91 0000000124",
        country: "India",
    },
    {
        id: "125",
        name: "C",
        address: "125-x Society Z, Mumbai",
        email: "125@host.com",
        phone: "+91 0000000125",
        country: "India",
    },
];

const search = (firstName, lastName, email, phone, addrLine1, addrLine2, societyName, city, state, pinCode, country, ) => {

    return sample_results;
};

module.exports = function() {
    const results = search('C', '', 'user@host.com', '+1 123-123-1234', '123 N Main Se', 'suite 300', 'Pinevitle', 'CT', '12345', 'USA' );
    console.log(results);
}