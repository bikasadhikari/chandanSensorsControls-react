import React from 'react'
import ProductCards from './ProductCards'
import "./Cards.css"
import Pyrometer from "../../../assets/images/pyrometer.jpeg";
import AutoCut from "../../../assets/images/autocut.jpg";
import Hmd from "../../../assets/images/hmdx.jpg";

const cardsInfo = [{
    id: 1,
    image: Pyrometer,
    title: "Pyrometer",
    info: "Developed specifically for high-temperature applications in the steel and primary metal industries proven reliability in severe production environments. Improve Your Process with Better Measurement today's increasing quality standards and higher energy costs demand more precise temperature control in the steel making process."
},
{
    id: 2,
    image: Hmd,
    title: "Hot metal detector",
    info: "The Hot Metal Detector (HMD) which, for decades has been operating successfully worldwide in the steel industry. Hot Metal Detectors (HMDs) are used in many different applications throughout the metals rolling process, for target detection, tracking and length determination. They are also an essential component of cut-to-length systems."
},
{
    id: 3,
    image: AutoCut,
    title: "Auto cut to length",
    info: "We have pleasure to introduce ourselves as manufacturers and suppliers of ROTARY SHEAR AUTO CUT TO LENGTH control systems, while eliminating traditional manual cutting, it is an ultimate cost and scrap saver system. The HMD with the panel can be used for end piece By Pass on TMT mills, provided required distance for the HMD & Mill Setup."
}];

const renderedCards = cardsInfo.map((obj) => {
    return <div className="col-md-4" key={obj.id}>
        <ProductCards image={obj.image} title={obj.title} info={obj.info}/>
    </div>
});

const CardsUI = () => {
    return (
        <div className="cardsWrapper">
            <h2 className="text-muted">Sensors</h2><hr className="hr-line"/>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
            {renderedCards}
            </div>
        </div>
        </div>
    )
}

export default CardsUI
