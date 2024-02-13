import { getAllCustomers } from "./../services/customer-number-server/customers.js";
const customers = getAllCustomers(); // Holen Sie sich die Kundeninformationen

const customerListElement = document.getElementById('customer-list'); // Holen Sie sich das Element, in das die Kundenliste eingefügt werden soll

customers.forEach(customer => {
    // Für jeden Kunden erstellen wir eine neue Karte
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Erstellen und Hinzufügen der Kundeninformationen
    const customerIdSpan = document.createElement('span');
    customerIdSpan.textContent = customer.customerId;
    cardElement.appendChild(customerIdSpan);

    const customerNameSpan = document.createElement('span');
    customerNameSpan.textContent = customer.customerName;
    cardElement.appendChild(customerNameSpan);

    const customerTelSpan = document.createElement('span');
    customerTelSpan.textContent = customer.customerTel;
    cardElement.appendChild(customerTelSpan);

    const customerEmailSpan = document.createElement('span');
    customerEmailSpan.textContent = customer.customerEmail;
    cardElement.appendChild(customerEmailSpan);

    // Füge die Karte zum Kundenlisten-Element hinzu
    customerListElement.appendChild(cardElement);
});
