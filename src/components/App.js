import { lazy } from 'react';
import CustomerDetails from 'pages/CustomerDetails';
// import { Customers } from 'pages/Customers';
// import { Sales } from 'pages/Sales';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from './Box';
import { InvoiceDetails } from './InvoiceDetails';
import { Invoices } from './invoices';
import { Layout } from './Layout';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const Sales = lazy(() => import('../pages/Sales'));
const Customers = lazy(() => import('../pages/Customers'));

export const App = () => {
  return (
    <Box as="main" p="3">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      {/* <ToastContainer autoClose={3000} /> */}
    </Box>
  );
};
