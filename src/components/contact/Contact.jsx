import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Ge In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <MdEmail className='contact__option_icon'/>
          <h4>E-mail</h4>
          <h5>achorimohsen@gmail.com</h5>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='-black'>Send a message</a>
          </article>

          <article className='contact__option'>
          <RiMessengerFill className='contact__option_icon' />
          <h4>Facebook</h4>
          <h5>achorimohsen@gmail.com</h5>
          <a href="https://m.me/profile.php?id=100032867061525"target='-black'>Send a message</a>
          </article>

          <article  className='contact__option'>
          <RiWhatsappFill className='contact__option_icon' />
          <h4>WhatsApp</h4>
          <h5>50486200</h5>
          <a href="http://api.whatsapp.com/send?phone=50486200" target='-black'>Send a message</a>
          </article>

          
                  
        </div>
        {/* end of contact option */}
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />

          <input type="email" name="email" placeholder='Your email' required />

          <textarea type="message" name="message" rows = "7" placeholder='Your Message' required >
          </textarea>

          <button type='submit' className='btn btn-primary'>send Message          
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact