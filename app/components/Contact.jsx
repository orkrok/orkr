import React, {useState} from 'react'
import { assets } from '@/assets/assets';
import Image from 'next/image';


const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length: 50%_auto]'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            Contact With Me</h4>
        <h2 className='text-center text-5xl font-ovo'>
            Get in Touch</h2>
        <p className='max-w-2xl mx-auto font-Ovo h-auto text-center mt-5 mb-12'>
            I'd love to hear from you. 
            Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
            <input type="text" name='name' className='flex-1 p-3 mb-4 border border-gray-300 rounded-md' placeholder='Your Name' required />
            <input type="text" name='email' placeholder='Your Email' required className='w-full p-3 mb-4 border border-gray-300 rounded-lg' />
            </div>
            <textarea rows='6' name='message'
            className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
            placeholder='Your Message' required></textarea>
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
            Submit now <Image src={assets.right_arrow_white} alt=''/></button>

            <p className='mt-4'>{result}</p>
        </form>

    </div>
  )
}

export default Contact
