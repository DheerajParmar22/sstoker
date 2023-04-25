import React from 'react'
import "./featuredProperties.css"
import apt1 from "../../SVG/hostelrules01.jpg"
import apt2 from "../../SVG/pexels-photo-4907238.jpeg"
import apt3 from "../../SVG/pexels-photo-11063553.jpeg"
import apt4 from "../../SVG/CIT-139-1024x678.jpg"


const FeaturedProperties = () => {

  return (
    <div className="fp">
        <div className="fpItem">
        <img src={apt1} alt="" className="fpImg" />
        <span className="fpName">Hostel Stare Misato</span>
        <span className="fpCity">Pune City</span>
        <span className="fpPrice">Starting from Rs.5000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={apt2} alt="" className="fpImg" />
        <span className="fpName">ApartHostem Stare Misato</span>
        <span className="fpCity">Pune City</span>
        <span className="fpPrice">Starting from Rs.5000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={apt3} alt="" className="fpImg" />
        <span className="fpName">ApartHostem Stare Misato</span>
        <span className="fpCity">Pune City</span>
        <span className="fpPrice">Starting from Rs.5000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={apt4} alt="" className="fpImg" />
        <span className="fpName">ApartHostem Stare Misato</span>
        <span className="fpCity">Pune City</span>
        <span className="fpPrice">Starting from Rs.5000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties