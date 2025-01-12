import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && phoneNumber && subject && messageText && email.includes('@')) {
      onValidated({
        EMAIL: email,
        FNAME: fullName,
        LNAME:'',
        PHONE: phoneNumber,
        MMERGE8: subject,
        MMERGE7: messageText
      });
    }
  };

  return (
    <form  className="max-w-2xl mx-auto p-6 bg-white ">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      
      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Your Message"
        className="w-full px-4 py-2 border rounded-md h-32 mb-4"
        required
      />
      
      <button 
        type="submit" 
        onClick={handleSubmit}
        className="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-custom-green transition duration-300 text-lg font-semibold"
      >
        ENVIAR
      </button>

      {status === "sending" && <div className="mt-4 text-blue-500">Sending...</div>}
      {status === "error" && <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{__html: message}}/>}
      {status === "success" && <div className="mt-4 text-green-500">Successfully Subscribed!</div>}
    </form>
  );
};

export default function ContactForm() {
  const postUrl = `https://us8.api.mailchimp.com/3.0/lists/2c74c630eb/members`;

  return (
    <div id='contact' className='bg-white py-14'>
          <div className="  ">
             <h2 className="text-[#1058a5] text-4xl md:text-5xl font-bold text-center mb-12">{'Contactanos'}</h2>
        </div>
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={
            formData => {
            subscribe(formData)
          }
          }
        />
      )}
    />
    </div>
  );
}
