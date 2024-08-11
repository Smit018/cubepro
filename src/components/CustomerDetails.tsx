import React from 'react';
import PhotoGrid from './PhotoGrid';
import './CustomerDetails.css';

type CustomerDetailsProps = {
  name: string;
  title: string;
  address: string;
};

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ name, title, address }) => {
  return (
    <div className="customer-details">
      <h2>{name}</h2>
      <p>{title}</p>
      <p>{address}</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;


