import React, { useState } from 'react'
import '../Contact/Contact.css'
import Swal from 'sweetalert2'

function Contact() {

    const [inputValue,setinputValue]=useState("");
    const [errorMessage,seterrorMessage]=useState("");

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
        seterrorMessage('');
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (inputValue.trim() === ""){
            seterrorMessage("please enter something");
        } else{
            seterrorMessage("");
                console.log("Input Submitted:",inputValue);
            
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a9dccad8-2bc2-4f94-9ceb-820d8707a2c1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      };
    
  return (
    <div className='contact' id='contact'>
        <form onSubmit={onSubmit}  onSubmits={handleSubmit}>
        <div className='contact-container'>
            
            <h1>Contact</h1>
       
            <div className='input-box'>
               <label>Full Name</label>
               <input name='name' type="text" className='filed' placeholder='Enter your name' value={inputValue} onChange={handleInputChange} required />
            </div>

            <div className='input-box'>
               <label>Email Address</label>
               <input name='email' type="email" className='filed' placeholder='Enter your email'  required />
            </div>

            <div className='input-box'>
               <label>Your Message</label>
               <textarea name="message" className='filed mess' placeholder='Enter your message' required></textarea>
            </div>
          

            <button type='submit' className='primary-btn'>Send Message</button>
            </div>
            </form>
            {errorMessage && (
                <p style={{color: "red", marginTop: "10px"}}>{errorMessage}</p>
            )}
    </div>
  )
}

export default Contact