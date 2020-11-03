import React from "react";
import "../components/layout.css";
import ConvertKitForm from "convertkit-react";

const MY_FORM_ID = 1788766;

export default function App() {
    const config = {
        formId: 1788766,
        
        emailPlaceholder: 'Enter your email address',
        namePlaceholder: 'Your first name',
        submitText: 'SEND ME THE FREE GUIDE',
      }
  return (
    <div className="App">
      <ConvertKitForm {...config}/>
    </div>
  );
}
