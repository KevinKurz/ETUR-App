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

const customerSchema = {
  schema: {
    body: {
      type: "object",
      properties: {
        customerId: { type: "string" },
        customerName: { type: "string" },
        customerTel: { type: "string" },
        customerEmail: { type: "string" },
      },
      required: ["customerId", "customerName", "customerEmail"],
    },
  },
};

const opts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            customerId: { type: "string" },
            customerName: { type: "string" },
            customerTel: { type: "string" },
            customerEmail: { type: "string" },
          },
        },
      },
    },
  },
};

function getCustomerWithID(id) {
  return customers.find((customer) => customer.customerId === id);
}

// API für die Customer-----------------------------------------------------------------------------

// get all customers
export async function routes(fastify, options) {
  fastify.get("/customers", async (request, reply) => {
    return customers;
  });

  // get customer by ID
  fastify.get("/customer/:id", async (request, reply) => {
    const customerId = request.params.id;
    const customer = getCustomerWithID(customerId);
    if (customer) {
      return customer;
    } else {
      reply.code(404).send({ message: "Customer not found" });
    }
  });

  // post customer
  fastify.post("/customer", async (request, reply) => {
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

  // delete customer
  fastify.delete("/customer/:id", async (request, reply) => {
    const customerId = request.params.id;
    const isDeleted = deleteCustomerWithID(customerId);
    if (isDeleted) {
      reply.code(204).send();
    } else {
      reply.code(404).send({ message: "Customer not found" });
    }
  });
}

//HTTP Requests für API--------------------------------------------------------------------------

export function getAllCustomers() {
  const response = fetch("http://localhost:3000/customers", {
    mode: "no-cors",
    method: "Get",
  });
  const customers = response.json();
  return customers;
}

export async function getCustomerWidthID(id) {
  const response = await fetch(`http://localhost:3000/customer/${id}`, {
    mode: "no-cors",
    method: "Get",
  });
  const customer = await response.json();
  return customer;
}

export async function deleteCustomerWidthID(id) {
  const response = await fetch(`http://localhost:3000/customer/${id}`, {
    mode: "no-cors",
    method: "DELETE",
  });
  return response.ok;
}

export async function postNewCustomer(newCustomer) {
  try {
    const response = await fetch("http://localhost:3000/customer", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
