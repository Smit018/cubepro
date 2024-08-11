// src/data/customersData.ts

// src/data/customersData.ts

export interface Customer {
    id: number;
    name: string;
    title: string;
  }
  
  const generateCustomers = (count: number): Customer[] => {
    const customers: Customer[] = [];
    for (let i = 1; i <= count; i++) {
      customers.push({ id: i, name: `Customer ${i.toString().padStart(2, '0')}`, title: `Title ${i.toString().padStart(2, '0')}` });
    }
    return customers;
  };
  
  export const customers: Customer[] = generateCustomers(1000); // Generate 1000 customers
  
  