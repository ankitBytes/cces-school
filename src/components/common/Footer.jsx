import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div style={{ background: '#00aeef' }} className='p-3 text-white d-flex justify-content-around px-5 flex-wrap'>
        <div>
          <a href='https://www.unicef.org/about-unicef/contact-us' style={{ textDecoration: "none", color: "white" }}>Contact Us</a> | <a href='https://www.unicef.org/legal' style={{ textDecoration: "none", color: "white" }}>Legal</a>
        </div>
        <div className='d-flex flex-wrap'>

          <a href="https://www.facebook.com/unicef/">
            <FaFacebookF color='white' size={20} className='mx-1' />
          </a>
          <a href="https://twitter.com/unicef">
            <FaTwitter color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.instagram.com/unicef/">
            <FaInstagram color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.youtube.com/unicef">
            <FaYoutube color='white' size={20} className='mx-1' />
          </a>
          <a href="https://www.linkedin.com/company/unicef/">
            <FaLinkedinIn color='white' size={20} className='mx-1' />
          </a>
        </div>
      </div>

      <div style={{ background: 'grey' }} className='p-2 text-white text-center'>
        Project by Leaflets (A UNIT OF IAMPIX TECHNOLOGY PVT. LTD.)
      </div>
    </>
  )
}

export default Footer