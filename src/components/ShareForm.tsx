import React, { useState } from 'react';
import './ShareForm.scss';

export const ShareForm: React.FC = () => {
  const [secret, setSecret] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setSubmitted(true);
    e.preventDefault();
  };

  if (!submitted) {
    return (
      <form onSubmit={handleSubmit} className="shareform">
        <textarea onChange={handleChange}
          value={secret}
          className="shareform__textarea"
          placeholder="Share your secret." />
        <div>
          <button
            className="shareform__button shareform__clear"
            onClick={() => setSecret('')}> Clear </button>
          <input type="submit"
            value="Share"
            className="shareform__button shareform__submit" />
        </div>
      </form>
    )
  }
  else {
    return <div>Success! Your secret was submitted and should appear shortly.</div>;
  }

}
