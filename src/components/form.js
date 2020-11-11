import React from "react";
import "../components/layout.css";
import ConvertKitForm from "convertkit-react";


export default function App() {
    const config = {
        formId: 1788766,
        
        emailPlaceholder: 'Enter your email address',
        namePlaceholder: 'Your first name',
        submitText: 'SEND ME THE FREE GUIDE',
      }
  return (
    <div >
      <ConvertKitForm {...config}/>
    </div>
  );
}
