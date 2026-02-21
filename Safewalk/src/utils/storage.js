export const saveContact = (contact) => {
    localStorage.setItem('emergencyContact', JSON.stringify(contact));
};

export const getContact = () => {
    const contact = localStorage.getItem('emergencyContact');
    return contact ? JSON.parse(contact) : null;
};

export const clearContact = () => {
    localStorage.removeItem('emergencyContact');
};