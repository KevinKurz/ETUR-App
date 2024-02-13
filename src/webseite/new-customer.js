import { postNewCustomer } from "./../services/customer-number-server/customers.js";

const form = document.getElementById("form");

// Event-Listener für das Formular hinzufügen
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const data = {
    userId: formData.get("customerId"),
    userName: formData.get("userName"),
    userTel: formData.get("userTel"),
    userEmail: formData.get("userEmail"),
  };
  postNewCustomer(data);
});
