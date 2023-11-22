import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'


const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_mail: '',
    user_project: '',
    message: '',
  });

  const [responseMsg,setResponse] = useState("")

  const handleChange = (e) => {

    const { name, value } = e.target;
    if(formData[name] !== value){

        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your EmailJS information
    const serviceId = 'service_t2amblc';
    const templateId = "Salton@2021";
    const userId = 'scvXb3p8oj6ku5OOP';

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
          setResponse("Message sent Success fully");
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Clear form fields after submission
    setFormData({
      name: '',
      email: '',
      project: '',
      message: '',
    });
  };

  // social Parameters

  const phoneNumber = '+250784854838';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const emailAddress = 'nezasalton@gmail.com';
  const subject = 'Subject';
  const body = 'Body of the email';
  
  // Encode special characters in subject and body
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;


 
  return (

    <section className='contact' id='contacts'>
        <div className='container'>
        <div className='contact__wrapper'>
        <div className='left__title'>
            <h4>Let's Talk On your Project</h4>
            <div className='image__talk'>
                <img src='/images/deal.svg' alt='' />
                <div className='our_socials'>
                <p>Send Us a message</p>
              
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <i className="ri-whatsapp-line"></i>
                </a>
                <a href={mailtoUrl}>
                  <i className="ri-mail-line"></i>
                </a>
                <div>
               
                </div>
                </div>
            </div>
        </div>

        <div className='form'>

                <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="user_name" value={formData.name} onChange={handleChange} />
                
                <br />
                <label>Email:</label>
                    <input type="email" name="user_email" value={formData.email} onChange={handleChange} />
                
                <br />
                <label>Project: </label>
                    <input type="text" name="user_project" value={formData.project} onChange={handleChange} />
               
                <br />
                <label>Message: </label>
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
               
                <br />
                <button type="submit">Send message</button>
                </form>
        </div>
        </div>
        </div>
    </section>
    
  );
};

export default Contact;
