import { getAllCustomers } from "./../services/customer-number-server/customers.js";
import { getCustomerWidthID } from "./../services/customer-number-server/customers.js";
import { deleteCustomerWidthID } from "./../services/customer-number-server/customers.js";
import { validateCustomerNumber } from "./../services/customer-number-server/customers.js";


const customers = getAllCustomers(); // Holen Sie sich die Kundeninformationen
const customerListElement = document.getElementById('customer-list'); // Holen Sie sich das Element, in das die Kundenliste eingefügt werden soll

// function displayUserList() {
//    let x = document.getElementById("customer-list");
//     if (!displayCustomerList) {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


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

const customer = getCustomerWidthID("004");
const deleteCustomer = deleteCustomerWidthID("002");

const validateCustomerId = validateCustomerNumber(customers[1].customerId)
console.log(validateCustomerId)