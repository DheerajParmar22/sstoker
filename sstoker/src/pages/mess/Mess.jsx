import React from 'react'
import "./mess.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";
import mess1 from "../../SVG/mess.jpg"
import mess2 from "../../SVG/messfoodd-1.jpg"
import mess3 from "../../SVG/boys-hostel-in-kota20.jpeg"
import mess4 from "../../SVG/images.jpg"

const Mess = () =>{

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen ]= useState(false);
    const photos = [
        {
            src: {mess1}
        },
        {
            src: {mess2}
        },
        {
            src: {mess3}
        },
        {
            src: {mess4}
        },
    ];

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true)
    };

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction === "l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
        }else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }
        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <Navbar/>
            <Header type = "list"/>
            <div className="messContainer">
                { open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight }className="arrow" onClick={()=>handleMove("r")}/>
                    </div>}
                <div className="messWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="messTitle">grand Hostel</h1>
                    <div className="messAddress">
                        <FontAwesomeIcon icon={faLocationDot}/> 
                        <span>Gurdwara Chowk, Akurdi</span>
                    </div>
                    <span className="messDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="messPriceHighlight">
                        Book a stay in next 15 day at 14000 and get 15% off
                    </span>
                    <div className="messImages">
                    {photos.map((photo, i) => (
              <div className="messImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="messImg"
                />
              </div>
            ))}
                    </div>
                    <div className="messDetails">
                        <div className="messDetailsTexts">
                            <h1 className="messTitle">Stay in the heart of Akurdi</h1>
                            <p className="messDesc">
                                Located a 5-minute walk from Akurdi Railway station. has accomodation
                                with air conditioning and Wifi. The units come with hardwood floors and 
                                fully equipped furniture. Popular points of interest near the apartment
                                include CLoth hall, Main Market, pradhikaran. The nearest mess in 500m
                                from this place. and the property offer great service and help.
                            </p>
                        </div>
                        <div className="messDetailsPrice">
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

export default Mess