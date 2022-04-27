import React from 'react'
import './About.css'

function FewWords() {
  return (
    <div className='few-about'>
    <img src={require('../../images/cookpic.png').default} alt="" />
    <div>
    <h2>A Few Words About QuickFood</h2>
    <p> QuickFood, one of today’s most renowned fast food restaurants, was established in 2013, as a quiet place where anyone could eat a burger or have a pizza that they loved. Our dedication to customers and quality food helps us to reach more today.</p>
      <button> see our menu </button>
      </div>
  </div>
  )
}

export default FewWords