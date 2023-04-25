import React from 'react'
import "./propertyList.css"
import Hostel from "../../SVG/Hostel-infra.jpg"
import Messdiner from "../../SVG/mess.jpg"
import Gym from "../../SVG/download.jpg"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={Hostel} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hostels</h1>
                <h2>233 hostel</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Messdiner} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Mess/Diner</h1>
                <h2>103 Mess</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Gym} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Gym</h1>
                <h2>53 Gyms</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList