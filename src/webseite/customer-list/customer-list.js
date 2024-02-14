import { getAllCustomers } from "../../services/customer-number-server/customers.js";

const customers =  getAllCustomers();
console.log(customers);
const customerListElement = document.getElementById("customer-list");

customers.forEach((customer) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const customerIdSpan = document.createElement("span");
  customerIdSpan.textContent = customer.customerId;
  cardElement.appendChild(customerIdSpan);

  const customerNameSpan = document.createElement("span");
  customerNameSpan.textContent = customer.customerName;
  cardElement.appendChild(customerNameSpan);

  const customerTelSpan = document.createElement("span");
  customerTelSpan.textContent = customer.customerTel;
  cardElement.appendChild(customerTelSpan);

  const customerEmailSpan = document.createElement("span");
  customerEmailSpan.textContent = customer.customerEmail;
  cardElement.appendChild(customerEmailSpan);

  customerListElement.appendChild(cardElement);
});
