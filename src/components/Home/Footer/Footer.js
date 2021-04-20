import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae" , link: "/emergency"},
        {name: " setsail@qode.com" , link: "/checkup"},
        {name: " Broadway & Morris St, New York" , link: "/personal-treatment"},
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const tour = [
        {name: "Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null" , link: "/emergency"},
    ]
    const OurRecentPosts = [
        {name: "Visit Thailand, Bali And China" , link: "/emergency"},
        {name: "September 7, 2021" , link: "/checkup"},
        {name: "The Sound Of Our Jungle" , link: "/personal-treatment"},
        {name: "September 7, 2021" , link: "/tooth-extract"},
        {name: "New Year, New Resolutions!" , link: "/checkup"},
        {name: "September 7, 2021" , link: "/checkup"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Company"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="OurRecentPosts" menuItems={OurRecentPosts}/>
                    <FooterCol key={3} menuTitle="Our Instagram" menuItems={tour}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item "><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-success">+566556565656</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;