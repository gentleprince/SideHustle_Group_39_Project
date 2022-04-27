import React from 'react'
import './footer.css'

function Footer() {
  return (
      <div className='footer'>
          <div className='address'>
              <img src="" alt="" />
              <p><span>Address:</span>267 Park Avenue New York, NY 90210</p>
              <p><span>Email:</span>info@demolink.org</p>
          </div>
         
          <div className="sup">
              <h3>Suppport</h3>
              <h4>Help & FAQ </h4>
              <h4>Refunds Policy</h4>
              <h4>platform Status</h4>
          </div>
          <div className='newsletter'>
              <h3>
                  Newsletter
              </h3>
              <form action="">
                  <input type="text" />
                  <br />
                  <button>subscribe</button>
              </form>
          </div>

    </div>
  )
}

export default Footer