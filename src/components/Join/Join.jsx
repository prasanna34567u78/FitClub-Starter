import React,{ useRef } from 'react';
import "./join.css";
import emailjs from "@emailjs/browser";
const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jgqu8us', 'template_61cuidz', form.current, 'Tg4QjQhWb1T-jTVfy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='Join' id="join-us">
        
        <div className="left-j">
            <hr />
            <div>
            <span className='stroke-text'>READY TO</span>
            <span> LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'> WITH US ?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='email' placeholder='Enter your Email address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>

    </div>
  )
}

export default Join