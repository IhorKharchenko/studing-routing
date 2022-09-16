import { getCustomerById } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);
  if (!customer) return;

  return (
    <main>
      <Link to={location.state?.from ?? '/customers'}>Back to customers</Link>
      <p>Username: {customer.name}</p>
    </main>
  );
};
export default CustomerDetails;
