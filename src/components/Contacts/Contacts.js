import React from 'react';

const subject = 'My Propossed Project';
const body = '';
const emailAddress = 'dreamhomedesigner.official@gmail.com';
const encodedSubject = encodeURIComponent(subject);
const encodedBody = encodeURIComponent(body);
export const mailtoUrl = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

export const EmailIcon = () => {
  // Encode special characters in subject and body

  return (
    <a href={mailtoUrl}>
      <i className="ri-mail-line"></i>
    </a>
  );
};

export const WhatsAppIcon = () => {
    const phoneNumber = '+919784952873';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <i className="ri-whatsapp-line"></i>
      </a>
    );
  };
  

