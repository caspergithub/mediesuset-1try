import React from 'react';
import Fblogo from '../../../images/fblogo.png';
import Tlogo from '../../../images/tlogo.png';
import Hlogo from '../../../images/Hancock-kvalitet-logo.png';

export default function Footer(props) {
    return (
        <footer>
            <h2>FØLG OS</h2>
            <div className="smlogos">
                <img src={Fblogo} alt="fblogo" className="smlogo" />
                <img src={Tlogo} alt="tlogo" className="smlogo" />
            </div>
            <h2>TILMELD NYHEDSBREV</h2>
            <p>Få seneste nyt sendt direkte til din indbakke</p>
            <form action="" className="footerform">
                <input type="text" className="indtast" placeholder="INDTAST DIN E-MAIL"/>
                <button className="tilmeld">TILMELD NYHEDSBREV</button>
            </form>
            <img src={Hlogo} alt="hlogo"/>
            <h2 className="fontcursive">-smag forskellen...</h2>
        </footer>
    )
}