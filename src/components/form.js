import React from "react";
import "../components/layout.css";
import ConvertKitForm from "convertkit-react";

const MY_FORM_ID = 1788766;

export default function App() {
    const config = {
        formId: 1788766,
        template: 'mills',
        emailPlaceholder: 'Enter your email address',
        submitText: 'SEND ME THE FREE GUIDE',
      }
  return (
    <div className="App">
      <h3>Minimal</h3>
      <ConvertKitForm formId={MY_FORM_ID} />
      <hr />
      <h3>Clare</h3>
      <ConvertKitForm template="clare" formId={MY_FORM_ID} />
      <hr />
      <h3>Mills</h3>
      <ConvertKitForm template="mills" formId={MY_FORM_ID} />
      <hr />
      <h3>Rainier</h3>
      <ConvertKitForm
        template="rainier"
        hideName={true}
        stacked={false}
        formId={MY_FORM_ID}
      />
      <hr />
      <h3>Config</h3>
      <ConvertKitForm {...config} />
      <hr />
      <h3>Charlotte</h3>
      <ConvertKitForm template="charlotte" formId={MY_FORM_ID} />
      <hr />
      <h3>Pine</h3>
      <ConvertKitForm template="pine" formId={MY_FORM_ID} />
    </div>
  );
}
