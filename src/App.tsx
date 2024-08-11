import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';
import {customers} from './data/customersData';
const App: React.FC = () => {


  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={handleSelectCustomer}
      />
      {selectedCustomer && (
        <CustomerDetails
          name={selectedCustomer.name}
          title={selectedCustomer.title}
          address="1234 Sample St, Sample City, Country"
        />
      )}
    </div>
  );
};

export default App;
