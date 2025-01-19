import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [messageText, setMessageText] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        fullName: "Nombre es requerido.",
      }));
    }

    if (!email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "El Correo electrónico es requerido.",
      }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "Formato no es válido.",
      }));
    }

    if (!phoneNumber.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phoneNumber: "El Teléfono es requerido",
      }));
    }

    if (!messageText.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        messageText: "Una descripción es requerida.",
      }));
    }
    
    if (!recaptchaValue.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        recaptchaValue: "Debes verificar reCAPTCHA.",
      }));
    }

    setStatus('sending');

    try {
      const objectValues ={
        "email_address": email,
        "status": "subscribed",
        "merge_fields": {
          "FNAME": fullName,
          "LNAME": "-",
          "PHONE": phoneNumber,
          "MMERGE8": subject,
          "MMERGE7": messageText
        }
      }

      const response = await fetch(
        `https://flazpro.azurewebsites.net/api/mailchimpFlazpro`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-functions-key": process.env.FUNCTION_KEY
          },
          body: JSON.stringify(objectValues),
        }
      );

      const res = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`); 
      } else {
        setStatus('success');
        setMessage('Mensaje registrado y enviado.');
      }
      
    } catch (error) {
      setStatus('error');
      setErrors(prevErrors => ({
        ...prevErrors,
        server: "Algo salió mal, por favor intentarlo en un momento.",
      }));
    }
  };

  return (
    <div id="reviews" className="bg-white py-10">
    <form className="max-w-2xl mx-auto p-6 bg-white" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nombre Completo"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Teléfono"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Asunto"
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <textarea
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Comentarios"
        className="w-full px-4 py-2 border rounded-md h-32 mb-4"
        required
      />
      {errors.messageText && <span className="error">{errors.messageText}</span>}

      <div className="mb-4">
       {/* <ReCAPTCHA
          sitekey="6LfrD9EpAAAAAAC3tYhnMLMI4nmfwHSKjHxAJM7l"
          onChange={handleRecaptchaChange}
        />
        {errors.recaptchaValue && <span className="error">{errors.recaptchaValue}</span>}
      */}
        </div>

      <button 
        type="submit" 
        className="w-full bg-custom-green text-white py-3 rounded-lg hover:bg-custom-green transition duration-300 text-lg font-semibold"
      >
        ENVIAR
      </button>

      {status === "sending" && <div className="mt-4 text-blue-500">Enviando...</div>}
      {status === "error" && <div className="mt-4 text-red-500" dangerouslySetInnerHTML={{__html: message}} />}
      {status === "success" && <div className="mt-4 text-green-500">¡Formulario enviado exitosamente!</div>}
    </form>
    </div>
  );
};

export default ContactForm;


/*import React, { useState } from 'react';
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
*/

