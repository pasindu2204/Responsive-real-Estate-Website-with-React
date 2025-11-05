import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* left side */}
            <div className="flexColStart f-left">
                <img src='./logo2.png' alt='logo' width={100}/>
                <span className='secondaryText'>Our Vision is to build a decentralized future
                    <br /> best place to live for everyone
                </span>
            </div>

            {/* right side */}
            <div className=" f-right">
                <div className="flexColStart f-menu">
                <span className='primaryText'>information</span>
                <span className='secondaryText'>99 Main street, Anytown, USA</span>
                </div>

                <div className="menu">

                <span>Property</span>
                <span>Service</span>
                <span>Product</span>
                <span>About</span>
</div>

            </div>
        </div>

    </section>
  )
}

export default Footer
