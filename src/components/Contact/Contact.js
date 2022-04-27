import React from 'react'

function Contact() {
  return (
      <div className='contact'>
          <div className="contact-header">
              <img src="" alt="" />
              <h1></h1>
          </div>
          <div className="form">
              <div className="details">
              <h2>Get in Touch</h2>
                  <h3>We are available 24/7 by fax, e-mail or by phone.
                      You can also use our quick contact form to ask a question
                      about our services that we offer on a regular basis.
                      We would be pleased to answer your questions.</h3>
              </div>
              <form action="">
                  <label>First Name</label>
                  <input type="text" />
                  <label>Last Name</label>
                  <input type="text" />
                  <label>Email</label>
                  <input type="text" />
                  <label>Your Message</label>
                  <textarea name="" id="" cols="30" rows="5"></textarea>
                  <button>Send Message</button>
              </form>
          </div>

    </div>
  )
}

export default Contact