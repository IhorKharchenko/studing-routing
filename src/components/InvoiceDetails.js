import { getInvoiceById } from 'fakeAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);
  if (!invoice) {
    return;
  }
  const { recipient, account, total, date } = invoice;

  return (
    <div>
      <p>InvoiceDetails {invoiceId}</p>
      <p>
        <b>recipient: </b>
        {recipient}
      </p>
      <p>
        <b>Account number: </b>
        {account}
      </p>
      <p>
        <b>Total due: </b>
        {total}
      </p>
      <p>
        <b>Invoice date: </b>
        {new Date(date.created).toLocaleDateString()}
      </p>
      <p>
        <b>Due date: </b>
        {new Date(date.due).toLocaleDateString()}
      </p>
    </div>
  );
};
