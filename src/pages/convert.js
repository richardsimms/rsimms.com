import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

 // your generated URL here //
  const baseURL = `https://app.convertkit.com/forms/1788766/subscriptions`;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.value);
    try {
      const res = await fetch(baseURL, {
        method: 'post',
        body: formData,
        headers: {
          accept: 'application/json',
        },
      });
      setEmail('');
      const json = await res.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="newsletter">
      <h3>Join My Newsletter</h3>
      <span>
        If are interested in reding more article like this one, please subscribe
        to receive quality articles straight to your inbox.
      </span>

      {status === 'SUCCESS' && <p>Please confirm your subscription.</p>}
      {status === 'ERROR' && <p>Oops, Something went wrong! please try again.</p>}

      <form
        className="newsletter__form"
        action={'https://app.convertkit.com/forms/1788766/subscriptions'}
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          className="newsletter__field"
          type="email"
          aria-label="Your email"
          name="email_address"
          placeholder="Email address"
          onChange={handleInputChange}
          value={email}
          required
        />

        <p><button type="submit">Subscribe</button></p>
      </form>
    </div>
  );
};

export default NewsletterForm;

    
    