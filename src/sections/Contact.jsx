import React from 'react'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EmailJSResponseStatus } from '@emailjs/browser';
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/HeroModels/ContactExperience'

const Contact = () => {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true); // Show loading state
  
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
  
        // Reset form and stop loading
        setForm({ name: " ", email: " ", message: " " });
      } catch (error) {
        console.error("EmailJS Error:", error); // Optional: show toast
      } finally {
        setLoading(false); // Always stop loading, even on error
      }
    };
  return (
    <section id='contact' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
                title="Get In Touch With Me" 
                sub="📧 Contact Information"
            />

            <div className='grid-12-cols mt-16'>
                {/* Left side - Contact Form */}
                <div className='xl:col-span-5'>
                    <div className='flex-center card-border rounded-xl p-10'>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7 max-w-xl mx-auto lg:mx-0' ref={formRef}>
                        <div >
                            <label htmlFor='name' className='font-medium'>Name</label>
                            <input 
                                type='text' 
                                id='name' 
                                placeholder='Your name' 
                                className='bg-[#1c1c24] border border-[#3a3a43] rounded-lg p-4 text-white'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='email' className='font-medium'>Email</label>
                            <input 
                                type='email' 
                                id='email' 
                                placeholder='Your email address' 
                                className='bg-[#1c1c24] border border-[#3a3a43] rounded-lg p-4 text-white'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='message' className='font-medium'>Message</label>
                            <textarea 
                                id='message' 
                                rows='6' 
                                placeholder='Your message' 
                                className='bg-[#1c1c24] border border-[#3a3a43] rounded-lg p-4 text-white resize-none'
                            />
                        </div>
                        <button 
                            type='submit' 
                            disabled={loading}
                        >
                            <div className='cta-button group'>
                                <div className='bg-circle'/>
                                <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                                <div className='arrow-wrapper'>
                                    <img src='images/arrow-down.svg' alt='arrow'/>
                                </div>

                            </div>
                            
                        </button>
                    </form>

                    </div>
          
                </div>

                
                {/* Right side - 3D Model */}
                <div className='xl:col-span-7 min-h-96'>
                    <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
                    <ContactExperience />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact