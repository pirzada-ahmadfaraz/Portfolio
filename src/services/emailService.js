import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAIL_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_1234567', // Replace with your service ID
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_1234567', // Replace with your template ID
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY' // Replace with your public key
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Ahmad Faraz', // Your name
      to_email: 'ahmadfarazpz@gmail.com', // Your email
      reply_to: formData.email
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

export default EMAIL_CONFIG;