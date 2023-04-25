import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Cities</li>
                <li className="fListItem">About Us</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Contact us</li>
                <li className="fListItem">Blog</li>
                <li className="fListItem">Register</li>
                <li className="fListItem">Post an Apartment</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Curtomer Service</li>
                <li className="fListItem">Partner Help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Sustainability</li>
                <li className="fListItem">Press center</li>
                <li className="fListItem">Safety Resource Center</li>
                 <li className="fListItem">Investor relations</li>
                 <li className="fListItem">Terms & conditions</li>
             </ul>
        </div>
        <div className="fText">
            Copyright @sstoker2022
        </div>
    </div>
  )
}

export default Footer