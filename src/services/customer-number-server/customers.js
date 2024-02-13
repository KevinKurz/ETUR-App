const customers = [
  {
    customerId: "ETUR-CN-001",
    customerName: "Kevin",
    customerTel: "01223456",
    customerEmail: "kevin@gmail.com",
  },
  {
    customerId: "ETUR-CN-002",
    customerName: "Sinan",
    customerTel: "01223456",
    customerEmail: "Sinan@gmail.com",
  },
  {
    customerId: "ETUR-CN-003",
    customerName: "Max",
    customerTel: "01223456",
    customerEmail: "kevin@gmail.com",
  },
  {
    customerId: "ETUR-CN-004",
    customerName: "Sara",
    customerTel: "01223456",
    customerEmail: "Sara@gmail.com",
  },
  {
    customerId: "ETUR-CN-005",
    customerName: "Markus",
    customerTel: "01223456",
    customerEmail: "Markus@gmail.com",
  },
  {
    customerId: "ETUR-CN-006",
    customerName: "Niklas",
    customerTel: "01223456",
    customerEmail: "Niklas@gmail.com",
  },
];

export function getAllCustomers() {
  return customers;
}

export function getCustomerWidthID(id) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].customerId === id) {
      return customers[i];
    }
  }
}

export function deleteCustomerWidthID(id) {
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].customerId === id) {
      customers.splice(i, 1);
      break;
    }
  }
  console.log(customers);
}

export function validateCustomerNumber(customerNumber) {
  const pattern = /^ETUR-CN-\d+$/;
  const isValid = pattern.test(customerNumber);

  if (!isValid) {
    return false;
  }

  const existingCustomer = customers.find(
    (customer) => customer.customerId === customerNumber
  );
  if (existingCustomer) {
    return true;
  }

  return false;
}

export async function routes(fastify, options) {
  fastify.get("/customers", async (request, reply) => {
    return customers;
  });

  fastify.get("/customers/:id", async (request, reply) => {
    const customerId = request.params.id;
    const customer = getCustomerWithID(customerId);
    if (customer) {
      return customer;
    } else {
      reply.code(404).send({ message: "Customer not found" });
    }
  });

  fastify.post("/customers", async (request, reply) => {
    const newCustomerData = request.body;
    if (
      !newCustomerData.customerId ||
      !newCustomerData.customerName ||
      !newCustomerData.customerTel ||
      !newCustomerData.customerEmail
    ) {
      reply.code(400).send({ message: "Missing required fields" });
    } else {
      const isValidId = validateCustomerNumber(newCustomerData.customerId);
      if (!isValidId) {
        reply.code(400).send({ message: "Invalid customer ID format" });
      } else {
        const existingCustomer = customers.find(
          (customer) => customer.customerId === newCustomerData.customerId
        );
        if (existingCustomer) {
          reply.code(409).send({ message: "Customer ID already exists" });
        } else {
          const newCustomer = createCustomer(newCustomerData);
          reply.code(201).send(newCustomer);
        }
      }
    }
  });

  fastify.delete("/customers/:id", async (request, reply) => {
    const customerId = request.params.id;
    const isDeleted = deleteCustomerWithID(customerId);
    if (isDeleted) {
      reply.code(204).send();
    } else {
      reply.code(404).send({ message: "Customer not found" });
    }
  });
}
