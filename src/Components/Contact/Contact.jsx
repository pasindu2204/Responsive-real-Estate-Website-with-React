import React from 'react';
import './Contact.css';
import { IoIosCall } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdMissedVideoCall } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";


const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='flexCenter paddings innerWidth c-container'>

            {/* left side */}
            <div className='c-left'>
                <span  className='orangeText flexColStart'>Contact Us</span>
                <span className='primaryText flexColStart'>info@example.com</span>
                <span className='secondaryText flexColStart'>+123 456 7890</span>

                <div className='flexColStart contactModes'>
                    {/* first row */}
                    <div className='flexColStart row'>
                        {/* first mode */}
                                 <div className='flexColCenter mode'>
                                    <div className='flexColStart flexCenter MO'>
                                        <div className='flexColStart icon'>
                                            <IoIosCall size={25} />
                                        </div>
                                        <div className='flexColStart detail'>
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>+123 456 7890</span>
                                        </div>
                                    </div>
                                <div className='flexCenter button'>Call Now</div>
                                 </div>
{/* second mode */}
                                 <div className='flexColCenter mode'>
                                    <div className='flexColStart flexCenter MO'>
                                        <div className='flexColStart icon'>
                                            <IoChatboxEllipses size={25} />
                                        </div>
                                        <div className='flexColStart detail'>
                                            <span className='primaryText'>Chat</span>
                                            <span className='secondaryText'>+123 888 7890</span>
                                        </div>
                                    </div>
                                <div className='flexCenter button'>Chat Now</div>
                                 </div>
                    </div>
                    {/* second row */}

                    <div className='flexColStart row-2'>
                        {/* third mode */}
                                 <div className='flexColCenter mode'>
                                    <div className='flexColStart flexCenter MO'>
                                        <div className='flexColStart icon'>
                                            <MdMissedVideoCall size={25} />
                                        </div>
                                        <div className='flexColStart detail'>
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>+123 456 7890</span>
                                        </div>
                                    </div>
                                <div className='flexCenter button'>VideoCall Now</div>
                                 </div>
                                {/* fourth mode  */}
                                 <div className='flexColCenter mode'>
                                    <div className='flexColStart flexCenter MO'>
                                        <div className='flexColStart icon'>
                                            <FiMessageCircle size={25} />
                                        </div>
                                        <div className='flexColStart detail'>
                                            <span className='primaryText'>Message</span>
                                            <span className='secondaryText'>+123 777 7890</span>
                                        </div>
                                    </div>
                                <div className='flexCenter button'>Message Now</div>
                            </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className=' c-right'>
                <div className='image-container'>
                <img src='./contact.jpg' alt='contact' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
