import React from 'react'
import "./hostel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import hst1 from "../../SVG/pexels-photo-4907238.jpeg"
import hst2 from "../../SVG/pexels-photo-11063553.jpeg"
import hst3 from "../../SVG/Hostel-infra.jpg"
import hst4 from "../../SVG/hostelrules01.jpg"

const Hostel = () =>{

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen ]= useState(false);
    const photos = [
        {
            src: {hst1}
        },
        {
            src: {hst2}
        },
        {
            src: {hst3}
        },
        {
            src: {hst4}
        },
    ];

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true)
    };

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
        }
        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navbar/>
            <Header type = "list"/>
            <div className="hostelContainer">
                { open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight }className="arrow" onClick={()=>handleMove("r")}/>
                    </div>}
                <div className="hostelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hostelTitle">Grand Hostel</h1>
                    <div className="hostelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/> 
                        <span>Gurdwara Chowk, Akurdi</span>
                    </div>
                    <span className="hostelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hostelPriceHighlight">
                        Book a stay in next 15 day at 14000 and get 15% off
                    </span>
                    <div className="hostelImages">
                    {photos.map((photo, i) => (
              <div className="hostelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hostelImg"
                />
              </div>
            ))}
                    </div>
                    <div className="hostelDetails">
                        <div className="hostelDetailsTexts">
                            <h1 className="hostelTitle">Stay in the heart of Akurdi</h1>
                            <p className="hostelDesc">
                                Located a 5-minute walk from Akurdi Railway station. has accomodation
                                with air conditioning and Wifi. The units come with hardwood floors and 
                                fully equipped furniture. Popular points of interest near the apartment
                                include CLoth hall, Main Market, pradhikaran. The nearest mess in 500m
                                from this place. and the property offer great service and help.
                            </p>
                        </div>
                        <div className="hostelDetailsPrice">
                            <h1>Perfect for a student stay!</h1>
                            <span>
                                Located in the real heart of Akurdi, this property has an Excellent
                                location score of 8.9!
                            </span>
                            <h2>
                                <b>Rs. 14000</b> (per month)
                            </h2>
                            <button>Reserce or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Hostel