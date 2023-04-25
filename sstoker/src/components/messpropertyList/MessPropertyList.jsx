import React from 'react'
import "./messpropertyList.css"
import im3 from "../../SVG/dining room -1.jpg"

const MessPropertyList = () => {
  return (
    <div className='mpList'>
        <div className="mpListItem">
            <img src={im3} alt="" className="mpList" />
            <div className="mpListTitles">
                <h1>Hostels</h1>
                <h1>233 hostel</h1>
            </div>
        </div>
        <div className="mpListItem">
        <img src={im3} alt="" className="mpList" />
            <div className="mpListTitles">
                <h1>Mess/Diner</h1>
                <h1>233 Mess</h1>
            </div>
        </div>
        <div className="mpListItem">
        <img src={im3} alt="" className="mpList" />
            <div className="mpListTitles">
                <h1>Mess/Diner</h1>
                <h1>233 Mess</h1>
            </div>
        </div>
        <div className="mpListItem">
        <img src={im3} alt="" className="mpList" />
            <div className="mpListTitles">
                <h1>Gym</h1>
                <h1>233 Gyms</h1>
            </div>
        </div>
    </div>
  )
}

export default MessPropertyList